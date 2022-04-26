import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from '../../models/todo-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  
  private REST_API_SERVER: String = "http://localhost:3000";
  
  isOpenTodoModal: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private http: HttpClient) { }
  
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.REST_API_SERVER + '/todo/')
      .pipe(
      catchError(this.errorHandler)
    )
  }

  addTodo(){
    
  }

  openTodoModal() {
    
  }
  

  errorHandler(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message:  ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}


// editTodos() {
  //   console.log('Edit');
  // }
  // deleteTodo() {
  //   console.log('Delete');
  // }
  // completeTodo() {;
  //   console.log('completed')
  // }