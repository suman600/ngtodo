import { TodoService } from "src/app/service/todo.service";
import { ModalService } from "./../../service/modal.service";
import { AlertService } from "./../../service/alert.service";
import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-todo-modal",
  templateUrl: "./todo-modal.component.html",
  styleUrls: ["./todo-modal.component.scss"],
})
export class TodoModalComponent implements OnInit {
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
    if (!this.editMode) {
      this.todoForm = this.fb.group({
        todoText: ["", [Validators.required, Validators.minLength(2)]],
      });
    } else {
      this.todoForm = this.fb.group({
        todoText: [this.todo.title],
      });
    }
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
    let completed = false;
    this.todoSerive.createTodo({ title: title, completed: completed });
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
}
