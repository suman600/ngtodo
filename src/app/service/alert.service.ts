import { Injectable } from "@angular/core";
import { Observable, Subject, timer } from "rxjs";

@Injectable()
export class AlertService {
  subject = new Subject<any>();

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  showAlert(show: true, message: string, type: string) {
    this.subject.next({ show: show, message: message, type: type });
  }
  closeAlert() {
    this.subject.next({ show: false, message: null, type: null });
  }
}
