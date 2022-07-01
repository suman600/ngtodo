import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TodoService } from '../../../service/todo.service';
import { addTodo, addTodoSuccess, loadTodos, loadTodosSuccess, } from './todo.action';

@Injectable()
export class TodoEffects {
    constructor(private todoService: TodoService, private actions$: Actions) { }

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodos),
            switchMap((action) => {
                return this.todoService.getAllTodo().pipe(
                    map((data: any) => {
                        return loadTodosSuccess({ payload: data });
                    }),
                    catchError(() => of({ type: '[TODO_PAGE] Load Todos Error' }))
                );
            })
        )
    );
    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodo),
            switchMap((todo) => {
                return this.todoService.addTodo(todo).pipe(
                    map((data: any) => {
                        return addTodoSuccess({ payload: data });
                    }),
                    catchError(() => of({ type: '[TODO_PAGE] add Todo Error]' }))
                );
            })
        )
    );
}

// catchError(() => of({ type: '[TODO_PAGE] Load Todos Error' }))
