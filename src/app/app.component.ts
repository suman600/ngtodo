import { Todo } from "./core/todo.adaper";
import { ModalService } from "./service/modal.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  todo: any;
  editMode: boolean = false;

  constructor(private modalService: ModalService) {}

  todoItemEvent(param: Todo) {
    this.todo = param;
  }
  editTodoItemEvent(param: Todo) {
    this.todo = param;
    this.editMode = true;
  }
  createTodo() {
    this.modalService.modalState(true, "Add Todo", "Add");
  }
}
