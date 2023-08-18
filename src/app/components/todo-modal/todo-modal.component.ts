import { TodoService } from "src/app/service/todo.service";
import { ModalService } from "./../../service/modal.service";
import { AlertService } from "./../../service/alert.service";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-todo-modal",
  templateUrl: "./todo-modal.component.html",
  styleUrls: ["./todo-modal.component.scss"],
})
export class TodoModalComponent implements OnInit, OnChanges {
  show: boolean = false;
  action: string = "";
  title: string = "";

  todoForm: FormGroup;
  @Input() todo: any;
  @Input() editMode: boolean = false;

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private todoSerive: TodoService,
    private alertService: AlertService
  ) {
    this.todoForm = this.fb.group({
      todoText: ["", [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {
    this.modalService.getModal().subscribe((data) => {
      this.show = data.show;
      this.title = data.title;
      this.action = data.action;
    });
  }

  onSubmit(formGroup: FormGroup) {
    if (!this.editMode) {
      this.addTodo();
    } else {
      this.updateTodo();
    }
  }

  modalClose() {
    this.todoForm.reset();
    this.modalService.modalState(false, "", "");
  }

  addTodo() {
    let title = this.todoForm.value.todoText;
    this.todoSerive.createTodo({ title: title, completed: false });
    this.modalClose();
    this.alertService.showAlert("Todo added successfully", "success");
  }

  updateTodo() {
    let id = this.todo.id;
    let title = this.todoForm.value.todoText;
    let completed = this.todo.completed;
    this.todoSerive.updateTodo({ id: id, title: title, completed: completed });
    this.modalClose();
    this.alertService.showAlert("Todo updated successfully", "success");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editMode) {
      this.todoForm = this.fb.group({
        todoText: [this.todo.title],
      });
    }
  }
}
