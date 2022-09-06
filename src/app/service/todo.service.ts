import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDataModel } from '../core/todo.adaper';

@Injectable()
export class TodoService {
  private API_URL: string = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {}

  getAllTodo() {
    return this.http.get<TodoDataModel>(this.API_URL);
  }

  addTodo(todo){
    return this.http.post<TodoDataModel>(this.API_URL, todo);
  }

}
