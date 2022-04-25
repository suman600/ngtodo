import { Component, OnInit } from '@angular/core';
import { OpenModalService } from '../services/open-modal.service';
import { FormBuilder, Validators } from '@angular/forms'
import { Todo } from '../heros/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-add-update',
  templateUrl: './todo-add-update.component.html',
  styleUrls: ['./todo-add-update.component.scss'],
})
export class TodoAddUpdateComponent implements OnInit {
  openTodoModal: boolean = false;

  _todos: Todo[] = [];
  _todoVal: String = '';
  _id: Number = 0;


  constructor(
    private openModalService: OpenModalService,
    private fb: FormBuilder,
    private todoService: TodoService
  ) { }

  form = this.fb.group({
    todoText: ['', Validators.required]
  })

  ngOnInit(): void {
    this.openModalService.openTodoModalEvent.subscribe((event: boolean) => {
      this.openTodoModal = event;
    }); 
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodo()
    // .subscribe((data: Todo) => this._todos = { ...data });
  }

  
  


  onSubmit() {
    if (this.form.valid) {
      this._todoVal = this.form.value.todoText;
      this._id = this._todos.length + 1;
      this._todos.push({
        id: this._id,
        text: this._todoVal,
        completed: false,
        deleted: false
      })
    console.log(this._todos)
    }
    this.form.reset();
  }

  closeTodoModal() {
    this.openModalService.modalBehaviorFun(false);
  }
}
