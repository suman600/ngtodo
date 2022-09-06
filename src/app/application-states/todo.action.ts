import { createAction, props } from '@ngrx/store';
import { TodoUIModal, TodoDataModel } from '../core/todo.adaper';


export const todoModalbehavior = createAction('[TODO_PAGE] Open_Todo_Modal', props<TodoUIModal>());

export const loadTodos = createAction('[TODO_PAGE] Load Todos', props<TodoDataModel>());
export const loadTodosSuccess = createAction('[TODO_PAGE] Load Todos Success', props<{ payload: TodoDataModel }>());
export const loadTodosError = createAction('[TODO_PAGE] Load Todos Error');


export const addTodo = createAction('[TODO_PAGE] Add Todo', props<TodoDataModel>());
export const addTodoSuccess = createAction('[TODO_PAGE] Add Todo Success', props<{ payload: TodoDataModel }>());
export const addTodoError = createAction('[TODO_PAGE] Add Todo Error');

// export const editTodo = createAction('[TODO_PAGE] Edit Todo', props<{payload:TodoDataModel}>);
// export const editTodoSuccess = createAction('[TODO_PAGE] Todo Success', props<{ payload: TodoDataModel }>());
// export const editTodoError = createAction('[TODO_PAGE] Edit Todo');
