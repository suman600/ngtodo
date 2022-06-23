import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoItem } from '../../../models/todo-model';
import { TodoService } from '../../../service/todo.service';
import { loadTodos } from './todo.action';

@Injectable()
export class TodoEffects {
    constructor(private todoService: TodoService, private actions$: Actions) { }

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[TODO_PAGE] Load Todos'),
            mergeMap(() =>
                this.todoService.getAllTodo().pipe(
                    map((todo) => ({
                        type: '[TODO_PAGE] Load Todos Success',
                        payload: todo,
                    })),
                    catchError(() => of({ type: '[TODO_PAGE] Load Todos Error' }))
                )
            )
        )
    );
}
