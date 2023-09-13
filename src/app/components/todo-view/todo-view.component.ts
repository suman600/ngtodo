import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import { AlertService } from "src/app/service/alert.service";
import { TodoService } from "src/app/service/todo.service";
import {Todo} from "../../core/todo.adaper";
import {ModalService} from "../../service/modal.service";

@Component({
  selector: "app-todo-view",
  templateUrl: "./todo-view.component.html",
  styleUrls: ["./todo-view.component.scss"],
})
export class TodoViewComponent implements OnInit {
  @Input() todo: any;
  @Input() viewMode: any;
  @Output() todoViewEvent = new EventEmitter<any>();

  constructor(
    private service: TodoService,
    private alertService: AlertService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  editTodo(todo: Todo) {
    this.modalService.modalState(true, "Edit Todo", "Update");
    this.todoViewEvent.emit({mode: 'editMode', todo});
  }
  deleteTodo(todo: Todo) {
    if (confirm("are you sure want to delete")) {
      this.service.deleteTodo(todo);
      this.alertService.showAlert("Todo deleted successfully", "danger");
      this.todo = null;
    }
  }
}
