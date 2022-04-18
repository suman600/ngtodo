import { Component, OnInit } from '@angular/core';
import { OpenModalService } from '../services/open-modal.service';

@Component({
  selector: 'app-todo-add-update',
  templateUrl: './todo-add-update.component.html',
  styleUrls: ['./todo-add-update.component.scss'],
})
export class TodoAddUpdateComponent implements OnInit {
  openTodoModal: boolean = false;

  constructor(private openModalService: OpenModalService) {}

  ngOnInit(): void {
    this.openModalService.openTodoModalEvent.subscribe((event: boolean) => {
      this.openTodoModal = event;
    });
  }

  closeTodoModal() {
    this.openModalService.modalBehaviorFun(false);
  }
}
