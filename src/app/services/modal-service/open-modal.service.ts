import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  @Output() openTodoModalEvent = new EventEmitter<boolean>();

  constructor() {}

  modalBehaviorFun(event: boolean) {
    this.openTodoModalEvent.emit(event);
  }

}
