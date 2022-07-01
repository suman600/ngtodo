import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TodoItem } from '../../../../models/todo-model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectLoadTodo,
  selectTodoModal,
} from '../../application-states/todo.selector';
import {
  addTodo,
  addTodoSuccess,
  loadTodos,
  todoModalbehavior,
} from '../../application-states/todo.action';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {
  showModal: boolean = false;
  modalTitle: string = '';
  modalActionText: string = '';
  todoModalBehavior$ = this.store.select(selectTodoModal);

  constructor(private store: Store<{}>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoModalBehavior$.subscribe({
      next: (value) => {
        this.showModal = value.showModal;
        this.modalTitle = value.modalTitle;
        this.modalActionText = value.modalActionText;
      },
    });
  }

  todoForm = this.fb.group({
    todoText: ['', Validators.required],
  });

  onSubmit() {
    this.todoForm.reset();
    this.closeTodoModal();
  }

  closeTodoModal() {
    this.store.dispatch(
      todoModalbehavior({
        showModal: false,
        modalTitle: '',
        modalActionText: '',
      })
    );
  }
}
