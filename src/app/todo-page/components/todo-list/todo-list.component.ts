import { Component, OnInit, Type } from '@angular/core';
import { map } from 'rxjs';
import { Todo } from 'src/app/core/todo.adaper';
import { TodoService } from 'src/app/service/todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  todos?: Todo[];
  todo?: Todo;
  currentIndex = -1;


  constructor(private service: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.service.getTodos().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
        ({
          id: c.payload.doc.id,
          ...c.payload.doc.data()
        })
        )
      )
    ).subscribe(data => {
      this.todos = data;
    });
  }

}