import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Loader } from "../core/todo.adaper";

@Injectable()
export class LoaderService {
  subject = new BehaviorSubject<any>("");

  constructor() {}

  getLoader(): Observable<any> {
    return this.subject.asObservable();
  }

  loaderBehaviour(param: Loader) {
    this.subject.next({ show: param.show, title: param.title });
  }
}
