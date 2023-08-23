import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class AlertService {
  subject = new BehaviorSubject<any>("");

  constructor() {
    console.log("AlertSevice mounted");
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  showAlert(message: string, type: string) {
    this.subject.next({ message: message, type: type });
  }
}
