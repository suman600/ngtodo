import { createReducer, on } from '@ngrx/store';
import { todoModalbehavior, loadTodos } from './todo.action';
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
  on(loadTodos, (_state, { userId, id, title, completed }) => {
    let state = { ..._state };
    state.loadTodoObj = {
      userId: userId,
      id: id,
      title: title,
      completed: completed,
    };
    return state;
  })
);

export function TodoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
