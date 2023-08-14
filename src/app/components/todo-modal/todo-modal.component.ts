import { TodoService } from "src/app/service/todo.service";
import { ModalService } from "./../../service/modal.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Todo } from "../../core/todo.adaper";

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

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private todoSerive: TodoService
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

  onSubmit(FormGroup: any) {
    this.todoSerive.createTodo(this.addTodo());
    this.todoForm.reset();
    this.modalService.modalState(false, "", "");
  }

  modalClose() {
    this.modalService.modalState(false, "", "");
    this.todoForm.reset();
  }

  addTodo() {
    let title = this.todoForm.value.todoText;
    return {
      title: title,
      completed: false,
    };
  }
}
