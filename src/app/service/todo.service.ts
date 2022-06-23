import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoItem } from '../models/todo-model';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private API_URL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getAllTodo(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.API_URL);
  }
}
