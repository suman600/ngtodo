import { createAction, props } from '@ngrx/store';
import { TodoModalItem, TodoItem } from '../../../models/todo-model';

export const todoModalbehavior = createAction(
  '[TODO_PAGE] Open_Todo_Modal',
  props<TodoModalItem>()
);

export const loadTodos = createAction(
  '[TODO_PAGE] Load Todos',
  props<TodoItem>()
);

export const loadTodosSuccess = createAction('[TODO_PAGE] Load Todos Success');
export const loadTodosError = createAction('[TODO_PAGE] Load Todos Error');
