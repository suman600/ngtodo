import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../services/todo-service/todo.service'
import { Todo } from '../../../../models/todo-model'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  todoList:Todo[] =[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((data: Todo[]) => {
      this.todoList = data;
    })
    
  }

}
