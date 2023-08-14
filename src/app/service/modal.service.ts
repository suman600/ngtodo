import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ModalService {
  subject = new Subject<any>();

  getModal(): Observable<any> {
    return this.subject.asObservable();
  }

  modalState(show: boolean, title: string, action: string) {
    this.subject.next({ show: show, title: title, action: action });
  }
}
