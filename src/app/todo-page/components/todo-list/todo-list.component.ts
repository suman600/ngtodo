import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../../models/todo-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLoadTodo } from '../../../application-states/todo.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoItem[]> = this.store.select(selectLoadTodo);
  todos: any = [];

  constructor(private store: Store<{ todo: TodoItem[] }>) { }

  ngOnInit() {
    this.store.dispatch({ type: '[TODO_PAGE] Load Todos' });
    this.todos$.subscribe(data => {
      if (data?.length > 0) {
        this.todos = data;
      }
    })
  }
}
