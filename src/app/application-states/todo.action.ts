import { createAction, props } from '@ngrx/store';
import { TodoUIModal, TodoDataModel, ModalUI } from '../core/todo.adaper';


export const todoModalbehavior = createAction('[TODO_PAGE] Open_Todo_Modal', props<TodoUIModal>());

export const openModal = createAction('[TODO_PAGE] Open_Todo_Modal', props<{ payload: ModalUI }>());
export const closeModal = createAction('[TODO_PAGE] Close_Todo_Modal', props<{ payload: ModalUI }>());


export const loadTodos = createAction('[TODO_PAGE] Load Todos');
export const loadTodosSuccess = createAction('[TODO_PAGE] Load Todos Success', props<{ payload: TodoDataModel }>());
export const loadTodosError = createAction('[TODO_PAGE] Load Todos Error');


export const addTodo = createAction('[TODO_PAGE] Add Todo', props<TodoDataModel>());
export const addTodoSuccess = createAction('[TODO_PAGE] Add Todo Success', props<{ payload: TodoDataModel }>());
export const addTodoError = createAction('[TODO_PAGE] Add Todo Error');

export const editTodo = createAction('[TODO_PAGE] Edit Todo', props<TodoDataModel>());
export const editTodoSuccess = createAction('[TODO_PAGE] Edit Todo Success', props<{ payload: TodoDataModel }>());
export const editTodoError = createAction('[TODO_PAGE] Edit Todo Error');
