import { Alert } from "./../../core/todo.adaper";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { AlertService } from "../../service/alert.service";
import { timer, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-todo-alert",
  templateUrl: "./todo-alert.component.html",
  styleUrls: ["./todo-alert.component.scss"],
})
export class TodoAlertComponent implements OnInit, OnDestroy {
  show: boolean = false;
  message: string = "";
  alerts: Alert[] = [];
  subscription = new Subscription();
  timer$ = new Subject();
  constructor(public alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe((data) => {
      console.log(data);

      const newAlert: Alert = {
        message: data.message,
        type: data.type,
      };
      this.alerts.push(newAlert);
    });
    this.autoClose();
  }

  closeAlert(i: any) {
    delete this.alerts[i];
  }

  autoClose() {
    interval(6000)
      .pipe(takeUntil(this.timer$))
      .subscribe(() => {
        this.alerts.shift();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.timer$.next(0);
    this.timer$.complete();
  }
}

// setTimeout(() => {
//   this.alerts.filter((currentAlert, index) => {
//     this.alerts.shift();
//   });
// }, 2000);
