import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../models/todo-model';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private API_URL: string = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {

  }

  getAllTodo(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.API_URL);
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.API_URL, todo);
  }

}
