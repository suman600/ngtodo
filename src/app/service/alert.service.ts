import { Alert } from "./../core/todo.adaper";
import { Injectable } from "@angular/core";
import { Observable, Subject, timer } from "rxjs";

@Injectable()
export class AlertService {
  subject = new Subject<any>();

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  showAlert(message: string, type: string) {
    this.subject.next({ message: message, type: type });
  }
}
