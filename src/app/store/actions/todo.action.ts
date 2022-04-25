import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todoItem.model';

export enum TodoActionType {
    ADD_TODO = '[TODO] Add Todo',   
    EDIT_TODO = '[TODO] Edit Todo',
    UPDATE_TODO = '[TODO] Update Todo',
    DELETE_TODO = '[TODO] Delete Todo'
}

export class AddTodoAction implements Action {
    readonly type = TodoActionType.ADD_TODO;
    constructor(public payload: TodoItem) {}
}

export class EditTodoAction implements Action {
    readonly type = TodoActionType.EDIT_TODO;
    constructor(public payload: TodoItem) {}
}

export class UpdateTodoAction implements Action {
    readonly type = TodoActionType.UPDATE_TODO;
    constructor(public payload: TodoItem) {}
}

export class DeleteTodoAction implements Action {
    readonly type = TodoActionType.DELETE_TODO;
    constructor(public payload: TodoItem) {}
}

export type TodoAction = AddTodoAction | EditTodoAction | UpdateTodoAction | DeleteTodoAction;
