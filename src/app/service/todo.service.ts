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
    // let suman = this.http.get(`http://localhost:3000/todo/1`);
    console.log(id);
    return this.http.get(this.API_URL + '/' + id.id);
    // return this.http.get(http://localhost:3000/todo/1`);
    // return this.http.get(`${this.API_URL}/${id}`);
    // console.log(this.http.get(`${this.API_URL}/${id}`))
  }

}
