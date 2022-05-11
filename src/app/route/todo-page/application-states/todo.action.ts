import { createAction, props } from '@ngrx/store';

export const openTodoModal = createAction(
  '[TODO_PAGE] Open_Todo_Modal',
  props<{ showModal: boolean; modalTitle: string }>()
);

export const closeTodoModal = createAction(
  '[TODO_PAGE] Close_Todo_Modal',
  props<{ showModal: boolean; modalTitle: string }>()
);