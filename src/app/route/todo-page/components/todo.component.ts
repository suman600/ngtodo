import { Component, OnInit } from '@angular/core';
import { OpenModalService } from '../../../services/modal-service/open-modal.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private openModalService: OpenModalService) {}

  ngOnInit(): void {
  }

  openTodoModal() {
    this.openModalService.modalBehaviorFun(true);
  }
}
