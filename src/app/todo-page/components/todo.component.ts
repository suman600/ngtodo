import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoModalbehavior } from '../../application-states/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<{}>) { }

  ngOnInit(): void { }

  openTodoModal() {
    this.store.dispatch(todoModalbehavior({ payload: { show: true, type: 'addMode', } })
    );
  }
}
