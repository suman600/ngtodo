import { ModalService } from "./service/modal.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  todo: any;

  constructor(private modalService: ModalService) {}

  todoItemEvent(param: any) {
    this.todo = param;
    console.log(this.todo);
  }

  createTodo() {
    this.modalService.modalState(true, "Add Todo", "Add");
  }
}
