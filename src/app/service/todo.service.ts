import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDataModel, TodoId } from '../core/todo.adaper';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private API_URL: string = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) { }

  getAllTodo() {
    return this.http.get(this.API_URL);
  }

  addTodo(todo: TodoDataModel) {
    return this.http.post(this.API_URL, todo);
  }

  editTodo(id: TodoId) {
    console.log(id);
    return this.http.get(this.API_URL + '/' + id.id);
  }

  updateTodo(id: TodoId, body: any) {
    console.log(id);
    return this.http.put(this.API_URL + '/' + id.id, body);
  }

}
