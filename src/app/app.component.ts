import { Todo } from "./core/todo.adaper";
import { ModalService } from "./service/modal.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  editTodo: any;
  viewTodo: any;
  editMode: boolean = false;

  constructor(private modalService: ModalService) {}

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
    if(mode =='closeMode'){
      this.editMode = false;
    }
  }
  createTodo() {
    this.modalService.modalState(true, "Add Todo", "Add");
  }
}
