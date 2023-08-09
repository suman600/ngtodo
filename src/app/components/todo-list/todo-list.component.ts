import { Todo } from "./../../core/todo.adaper";
import { AlertService } from "./../../service/alert.service";
import { Component, EventEmitter, OnInit, Output, Type } from "@angular/core";
import { map } from "rxjs";
import { TodoService } from "src/app/service/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todos?: Todo[];
  todo?: Todo;
  currentIndex = -1;
  loading: boolean = false;
  @Output() todoItemEvent = new EventEmitter<any>();

  constructor(
    private service: TodoService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.getTodos();
  }

  getTodos() {
    this.service
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
        this.todos = data;
        this.loading = false;
        if (this.todos.length) {
          this.alertService.showAlert(true, "Data Loaded", "success");
        }
      });
  }

  deleteTodo(param: any) {
    let conF = confirm("are you sure want to delete");
    if (conF == true) {
      // this.service.deleteTodo(param.id);
      this.alertService.showAlert(true, "Todo deleted successfully", "danger");
      console.log(param.id);
    }
  }

  viewTodo(todo: any) {
    this.todoItemEvent.emit(todo);
  }
}
