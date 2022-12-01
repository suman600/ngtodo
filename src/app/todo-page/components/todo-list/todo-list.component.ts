import { Component, OnInit, Type } from '@angular/core';
import { TodoDataModel, TodoId } from '../../../core/todo.adaper';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLoadTodo, selectEditTodo } from '../../../application-states/todo.selector';
import { loadTodos, editTodo, editTodoSuccess } from 'src/app/application-states/todo.action';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoDataModel[]> = this.store.select(selectLoadTodo);

  todos: any = [];
  payload: any;

  constructor(private store: Store<{}>) { }

  ngOnInit() {
    this.store.dispatch(loadTodos());
    this.todos$.subscribe(data => {
      if (data?.length > 0) {
        this.todos = data;
      }
    })
  }

  editTodo(todo: TodoDataModel) {

    console.log(todo)
  }

  deleteTodo() {

  }


}