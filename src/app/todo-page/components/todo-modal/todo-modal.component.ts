import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAddTodo, selectTodoModal } from '../../../application-states/todo.selector';
import { todoModalbehavior, addTodo, addTodoSuccess } from '../../../application-states/todo.action';
import { TodoService } from 'src/app/service/todo.service';

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
  addtodo$ = this.store.select(selectAddTodo);

  constructor(private store: Store<{}>, private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoModalBehavior$.subscribe({
      next: (value) => {
        this.showModal = value.showModal;
        this.modalTitle = value.modalTitle;
        this.modalActionText = value.modalActionText;
      },
    });

    // this.addtodo$.subscribe((data) => { });
  }

  todoForm = this.fb.group({
    todoText: ['', Validators.required],
  });

  onSubmit() {
    this.store.dispatch(
      addTodo({
        'id': '10',
        'title': 'suman',
        'completed': false,
        'deleted': false
      }))
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
