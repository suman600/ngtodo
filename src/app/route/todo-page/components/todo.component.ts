import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openTodoModal } from '../application-states/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<{}>) {}

  ngOnInit(): void {}

  openTodoModal() {
    this.store.dispatch(
      openTodoModal({
        showModal: true,
        modalTitle: 'Add Modal',
      })
    );
  }
}
