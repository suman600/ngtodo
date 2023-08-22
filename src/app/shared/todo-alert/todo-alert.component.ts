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
    console.log("TodoAlertComponent mounted");

    this.subscription = this.alertService.getAlert().subscribe((data) => {
      const newAlert: Alert = {
        message: data.message,
        type: data.type,
      };
      this.alerts.push(newAlert);
      console.log({ alerts: this.alerts });
      this.autoClose();
    });
  }

  closeAlert(i: any) {
    this.alerts.splice(i, 1);
  }

  autoClose() {
    setTimeout(() => {
      console.log(this.alerts);

      this.alerts.shift();
    }, 3000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

// setTimeout(() => {
//   this.alerts.filter((currentAlert, index) => {
//     this.alerts.shift();
//   });
// }, 2000);
