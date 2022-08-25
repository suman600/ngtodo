import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAddTodo, selectLoadTodo, selectTodoModal } from '../../../application-states/todo.selector';
import { todoModalbehavior, addTodo, addTodoSuccess } from '../../../application-states/todo.action';
import { TodoItem } from 'src/app/models/todo-model';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {
  showModal: boolean = false;
  modalTitle: string = '';
  modalActionText: string = '';
  selectTodoModal$ = this.store.select(selectTodoModal);
  selectLoadTodo$ = this.store.select(selectLoadTodo);

  // 

  constructor(private store: Store<{}>, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.selectTodoModal$.subscribe({
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

  closeTodoModal() {
    this.store.dispatch(
      todoModalbehavior({
        showModal: false,
        modalTitle: '',
        modalActionText: '',
      })
    );
  }

  createTodo = {
    'id': '',
    'title': '',
    'completed': false,
    'deleted': false
  }


  getTodoData() {
    this.selectLoadTodo$.subscribe(data => {
      if (data?.length > 0) {
        this.createTodo.id = data.length + 1;
        this.createTodo.title = this.todoForm.value.todoText;
        this.createTodo.completed = false;
        this.createTodo.deleted = false;
      }

    });

  }

  onSubmit() {
    this.getTodoData();
    this.store.dispatch(
      addTodo(this.createTodo)
    );
    this.todoForm.reset();
    this.closeTodoModal();
  }

}
