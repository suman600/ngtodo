import { Component, OnInit, Type } from '@angular/core';
import { Observable } from '@firebase/util';
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
  loading: boolean = false;


  constructor(private service: TodoService) {

  }

  ngOnInit() {
    this.loading = true;
    this.getTodos();
  }


  getTodos() {
    this.service.getTodos().snapshotChanges().pipe(
      map(changes =>
        changes.map(change =>
        ({
          id: change.payload.doc.id,
          ...change.payload.doc.data()
        })
        ))
    ).subscribe(data => {
      this.todos = data;
      this.loading = false;
    });
  }


}