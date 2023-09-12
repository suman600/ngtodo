import { TodoService } from "src/app/service/todo.service";
import { ModalService } from "../../service/modal.service";
import { AlertService } from "../../service/alert.service";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Todo} from "../../core/todo.adaper";

@Component({
  selector: "app-todo-modal",
  templateUrl: "./todo-modal.component.html",
  styleUrls: ["./todo-modal.component.scss"],
})
export class TodoModalComponent implements OnInit, OnChanges{
  show: boolean = false;
  action: string = "";
  title: string = "";

  todoForm: FormGroup;
  @Input() todo: any;
  @Input() editMode: boolean = false;
  @Output() todoUpdatedEvent = new EventEmitter<any>();

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
    this.editMode = false;
  }

  addTodo() {
    let title = this.todoForm.value.todoText;
    this.todoSerive.createTodo({ title: title, completed: false });
    this.modalClose();
    this.alertService.showAlert("Todo added successfully", "success");
  }

  updateTodo() {
    let todo: Todo = {
      id:this.todo.id,
      title:this.todoForm.value.todoText,
      completed:this.todo.completed
    }
    this.todoSerive.updateTodo(todo);
    this.modalClose();
    this.alertService.showAlert("Todo updated successfully", "success");
    this.todoUpdatedEvent.emit({mode: 'updateMode', todo});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editMode) {
      this.todoForm = this.fb.group({
        todoText: [this.todo.title, [Validators.required, Validators.minLength(2), this.customValidateTitle]],
      });
    }
  }

  customValidateTitle = () => {
    if(this.editMode) {
      if(this.todoForm.get('todoText')?.value == this.todo.title) {
        return {invalidTitle: true};
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

