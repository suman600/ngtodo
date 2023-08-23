import { Todo } from "./core/todo.adaper";
import { ModalService } from "./service/modal.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  modalTodo: any;
  viewTodo: any
  editMode: boolean = false;

  constructor(private modalService: ModalService) {}

  todoItemEvent({mode, todo}: {mode:string, todo: Todo}) {
    if (mode == "viewMode") {
      this.viewTodo = todo;
    } else {
      this.modalTodo = todo;
      this.editMode= true
    }
  }
  createTodo() {
    this.modalService.modalState(true, "Add Todo", "Add");
  }
}
