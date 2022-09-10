import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TodoService } from '../service/todo.service';
import {
    loadTodos, loadTodosSuccess, loadTodosError,
    addTodo, addTodoSuccess, addTodoError,
    editTodo, editTodoSuccess, editTodoError
} from './todo.action';

@Injectable()
export class TodoEffects {
    constructor(private todoService: TodoService, private actions$: Actions) { }

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodos),
            switchMap(() => {
                return this.todoService.getAllTodo().pipe(
                    map((data: any) => {
                        return loadTodosSuccess({ payload: data });
                    }),
                    catchError(() => of(loadTodosError))
                );
            })
        )
    );
    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodo),
            switchMap((data) => {
                return this.todoService.addTodo(data).pipe(
                    map((data: any) => {
                        return addTodoSuccess({ payload: data });
                    }),
                    catchError(() => of(addTodoError))
                );
            })
        )
    );
    editTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(editTodo),
            switchMap((data) => {

                return this.todoService.editTodo(data.payload).pipe(
                    map((data) => {
                        return editTodoSuccess(data);
                    }),
                    catchError(() => of(editTodoError))
                )
            })
        )
    );
}

// catchError(() => of({ type: '[TODO_PAGE] Load Todos Error' }))
