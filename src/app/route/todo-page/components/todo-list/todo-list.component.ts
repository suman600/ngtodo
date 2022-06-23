import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../service/todo.service';
import { TodoItem } from '../../../../models/todo-model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectLoadTodo } from '../../application-states/todo.selector';
import { loadTodos, loadTodosSuccess } from '../../application-states/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoItem[]> = this.store.select((state) => state.todo);

  constructor(private store: Store<{ todo: TodoItem[] }>) { }

  ngOnInit() {
    this.store.dispatch({ type: '[TODO_PAGE] Load Todos' });

    this.todos$.subscribe((data) => {
      console.log(data);
    });
  }
}
