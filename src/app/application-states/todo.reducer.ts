import { createReducer, on, State } from '@ngrx/store';
import {
  openModal, closeModal,
  todoModalbehavior,
  loadTodosSuccess,
  addTodo,
  addTodoSuccess,
  loadTodos,
  editTodo, editTodoSuccess
} from './todo.action';
import { TodoUIModal, TodoDataModel, TodoId, ModalUI } from '../core/todo.adaper'

export const initialState = {
  todoModalObj: <TodoUIModal>{
    showModal: false,
    modalTitle: '',
    modalActionText: '',
  },
  modalObj: <ModalUI>{
    show: false,
    title: '',
    action: '',
    id: ''
  },
  loadTodoObj: <TodoDataModel>{
    id: '',
    title: '',
    completed: false,
    deleted: false
  },
  addTodoObj: <TodoDataModel>{
    id: '',
    title: '',
    completed: false,
    deleted: false
  },
  editTodoObj: <TodoDataModel>{
    id: '',
    title: '',
    completed: false,
    deleted: false
  },
  editToDoId: ''
};

const _todoReducer = createReducer(
  initialState,
  on(
    todoModalbehavior,
    (_state, { showModal, modalTitle, modalActionText }) => {
      let state = { ..._state };
      state.todoModalObj = {
        showModal: showModal,
        modalTitle: modalTitle,
        modalActionText: modalActionText,
      };
      return state;
    }
  ),
  on(openModal, (_state, { payload }) => {
    let state = { ..._state };
    state.modalObj = payload;
    return state;
  }),
  on(closeModal, (_state, { payload }) => {
    let state = { ..._state };
    state.modalObj = payload;
    return state;
  }),
  on(loadTodos, (_state) => {
    let state = { ..._state };
    return state;
  }
  ),
  on(loadTodosSuccess, (_state, { payload }) => {
    let state = { ..._state };
    state.loadTodoObj = payload;
    return state;
  }),

  on(addTodo, (_state, { id, title, completed, deleted }) => {
    let state = { ..._state };
    state.addTodoObj = {
      id: id,
      title: title,
      completed: completed,
      deleted: deleted
    };
    return state;
  }),
  on(addTodoSuccess, (_state, { payload }) => {
    let state = { ..._state };
    state.addTodoObj = payload;

    return state;
  }),
  on(editTodo, (_state, { id, title, completed, deleted }) => {
    let state = { ..._state };
    state.editTodoObj = {
      id: id,
      title: title,
      completed: completed,
      deleted: deleted
    }
    return state;
  }),

  on(editTodoSuccess, (_state, { payload }) => {
    let state = { ..._state };
    state.editTodoObj = payload;
    return state
  })
);

export function TodoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
