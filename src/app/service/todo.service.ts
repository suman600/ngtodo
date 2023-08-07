import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Todo } from '../core/todo.adaper';

@Injectable()


export class TodoService {

  private API_URL: string = '/todos';

  todosRef: AngularFirestoreCollection<Todo>;
  // todoRef: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.todosRef = this.db.collection(this.API_URL);
  }

  getTodos(): AngularFirestoreCollection<Todo> {
    return this.todosRef;
  }
  createTodo(todo: Todo) {
    this.todosRef.add({ ...todo })
  }

  deleteTodo(id: string) {
    this.todosRef.doc(id).delete()
  }

}
