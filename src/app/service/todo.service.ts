import { Todo } from "./../core/todo.adaper";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { update } from "@angular/fire/database";

@Injectable()
export class TodoService {
  private API_URL: string = "/todos";

  todosRef: AngularFirestoreCollection<Todo>;

  constructor(private db: AngularFirestore) {
    this.todosRef = this.db.collection(this.API_URL);
  }

  getTodos(): AngularFirestoreCollection<Todo> {
    return this.todosRef;
  }
  createTodo(todo: Todo) {
    console.log(todo);
    this.todosRef.add({ title: todo.title, completed: todo.completed });
  }

  deleteTodo(todo: Todo) {
    this.todosRef.doc(todo.id).delete();
  }

  updateTodo(todo: Todo) {
    this.todosRef.doc(todo.id).update({
      title: todo.title,
      completed: todo.completed,
    });
  }

  completeAllTodo(todos: Todo[]) {
    todos.forEach((todo: Todo) => {
      this.updateTodo(todo);
    });
  }
  deleteAllTodo(todos: Todo[]) {
    todos.forEach((todo: Todo) => {
      this.deleteTodo(todo);
    });
  }
}
