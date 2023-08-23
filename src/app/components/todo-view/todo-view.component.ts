import { Component, Input, OnInit } from "@angular/core";
import { AlertService } from "src/app/service/alert.service";
import { TodoService } from "src/app/service/todo.service";

@Component({
  selector: "app-todo-view",
  templateUrl: "./todo-view.component.html",
  styleUrls: ["./todo-view.component.scss"],
})
export class TodoViewComponent implements OnInit {
  @Input() todo: any;
  @Input() viewMode: any;

  constructor(
    private service: TodoService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  deleteTodo(todo: any) {
    if (confirm("are you sure want to delete")) {
      this.service.deleteTodo(todo);
      this.alertService.showAlert("Todo deleted successfully", "danger");
      this.todo = null;
    }
  }
}
