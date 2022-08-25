import { createReducer, on } from '@ngrx/store';
import {
  todoModalbehavior,
  loadTodosSuccess,
  addTodo,
  addTodoSuccess,
  loadTodos,
} from './todo.action';
import { TodoModalItem, TodoItem } from '../models/todo-model';

export const initialState = {
  todoModalObj: <TodoModalItem>{
    showModal: false,
    modalTitle: '',
    modalActionText: '',
  },
  loadTodoObj: <TodoItem>{
    id: '',
    title: '',
    completed: false,
    deleted: false
  },
  addTodoObj: <TodoItem>{
    id: '',
    title: '',
    completed: false,
    deleted: false
  },
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
  on(
    loadTodos,
    (_state, { id, title, completed, deleted }) => {
      let state = { ..._state };
      state.addTodoObj = {
        id: id,
        title: title,
        completed: completed,
        deleted: deleted
      };
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
  })
);

export function TodoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
