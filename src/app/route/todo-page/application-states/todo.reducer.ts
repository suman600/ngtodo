import { createReducer, on } from '@ngrx/store';
import { openTodoModal, closeTodoModal } from './todo.action';

export const initialState = {
  todoModalObj: {
    showModal: false,
    modalTitle: '',
  },
};

const _todoReducer = createReducer(
  initialState,
  on(openTodoModal, (_state, { showModal, modalTitle }) => {
    let state = { ..._state };
    state.todoModalObj = {
      showModal: showModal,
      modalTitle: modalTitle,
    };
    return state;
  }),
  on(closeTodoModal, (_state, { showModal, modalTitle }) => {
    let state = { ..._state };
    state.todoModalObj = {
      showModal: showModal,
      modalTitle: modalTitle,
    };
    return state;
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
