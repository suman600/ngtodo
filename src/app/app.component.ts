import { Todo } from "./core/todo.adaper";
import { ModalService } from "./service/modal.service";
import { Component, OnInit } from "@angular/core";
import { map, Subscription } from "rxjs";
import { TodoService } from "./service/todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  editTodo: any;
  viewTodo: any;
  editMode: boolean = false;
  tabs;
  activeTab: string = "All";
  finishAll: boolean = false;
  hasTodoItem: boolean = false;
  hasCompletedItem: boolean = false;
  todosSubscription = new Subscription();

  constructor(
    private modalService: ModalService,
    private todoService: TodoService
  ) {
    this.tabs = [
      { text: "All", icon: "fas fa-bars" },
      { text: "Completed", icon: "fas fa-check" },
    ];
  }

  ngOnInit() {
    this.todosSubscription = this.todoService
      .getTodos()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            id: change.payload.doc.id,
            ...change.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        let hasItem = false;
        let hasCompleted = false;
        for (let i = 0; i < data.length; i++) {
          data[i].completed ? (hasCompleted = true) : (hasItem = true);
        }
        this.hasTodoItem = hasItem;
        this.hasCompletedItem = hasCompleted;
        //this.todosSubscription.unsubscribe();
      });
  }

  todoItemEvent({ mode, todo }: { mode: string; todo: Todo }) {
    if (mode == "editMode") {
      this.editTodo = todo;
      this.editMode = true;
    }
    if (mode == "viewMode") {
      this.viewTodo = todo;
      this.editMode = false;
    }
    if (this.viewTodo && mode == "updateMode") {
      this.viewTodo = todo;
    }
    if (mode == "closeMode") {
      this.editMode = false;
    }
    if (mode == "checkMode") {
      this.viewTodo = todo;
    }
    if (mode == "completedMode") {
      this.viewTodo = todo;
    }
  }

  addTodo() {
    this.modalService.modalState(true, "Add Todo", "Add");
  }

  activeTabFun(tab: any) {
    this.activeTab = tab.text;
    this.editMode = false;
    this.editTodo = null;
    this.viewTodo = null;
  }

  completedProcess(data: Todo[]) {
    if (data) {
      let filteredTodo: Todo[] = data.filter((item) => {
        return !item.completed;
      });
      let allCompleted: Todo[] = filteredTodo.map((item) => {
        item.completed = true;
        return item;
      });
      this.todoService.completeAllTodo(allCompleted);
      this.finishAll = false;
    }
  }

  completeAll() {
    this.finishAll = true;
    this.todosSubscription = this.todoService
      .getTodos()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            id: change.payload.doc.id,
            ...change.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        setTimeout(() => {
          this.completedProcess(data);
          this.finishAll = false;
          this.hasTodoItem = false;
        }, 1000);
        this.todosSubscription.unsubscribe();
      });
  }

  DeleteAll() {
    this.finishAll = true;
    this.todosSubscription = this.todoService
      .getTodos()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            id: change.payload.doc.id,
            ...change.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        let completedArr: Todo[] = [];
        data.forEach((item) => {
          if (item.completed) {
            completedArr.push(item);
          }
        });
        setTimeout(() => {
          this.todoService.deleteAllTodo(completedArr);
          this.finishAll = false;
        }, 1000);
        this.todosSubscription.unsubscribe();
      });
  }
}
