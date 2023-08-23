import { ModalService } from "./../../service/modal.service";
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
  // @Output() editTodoItemEvent = new EventEmitter<any>();
  constructor(
    private todoService: TodoService,
    private alertService: AlertService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.alertService.showAlert("Loading pls wait....", "success");
    this.getTodos();
  }

  getTodos() {
    this.todoService
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
      });
  }

  deleteTodo(todo: any, e: any) {
    e.stopPropagation();
    if (confirm("are you sure want to delete")) {
      this.todoService.deleteTodo(todo);
      this.alertService.showAlert("Todo deleted successfully", "danger");
    }
  }

  viewTodo(todo: Todo) {
    this.todoItemEvent.emit({mode: 'viewMode', todo});
  }

  editTodo(todo: Todo, e: any) {
    e.stopPropagation();
    this.modalService.modalState(true, "Edit Todo", "Update");
    this.todoItemEvent.emit({mode: 'editMode', todo});
  }
}
