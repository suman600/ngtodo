import { Component } from '@angular/core';
import { OpenModalService } from './services/open-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private openModalService: OpenModalService) {}

  openTodoModal() {
    this.openModalService.modalBehaviorFun(true);
  }
}
