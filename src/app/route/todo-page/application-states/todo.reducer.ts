import { createReducer, on } from '@ngrx/store';
import { todoModalbehavior, loadTodosSuccess, addTodo, } from './todo.action';
import { TodoModalItem, TodoItem } from '../../../models/todo-model';

export const initialState = {
  todoModalObj: <TodoModalItem>{
    showModal: false,
    modalTitle: '',
    modalActionText: '',
  },
  loadTodoObj: <TodoItem>{
    userId: '',
    id: '',
    title: '',
    completed: false,
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
  on(loadTodosSuccess, (_state, { payload }) => {
    let state = { ..._state };
    state.loadTodoObj = payload;
    return state;
  }),
  on(addTodo, (_state, { userId, id, title, completed }) => {
    let state = { ..._state };

    return state;
  })
);

export function TodoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
