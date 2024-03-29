import { Alert } from "../../core/todo.adaper";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AlertService } from "../../service/alert.service";

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
  constructor(public alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe((data) => {
      if (data) {
        const newAlert: Alert = {
          message: data.message,
          type: data.type,
        };
        this.alerts.push(newAlert);
      }
      this.autoClose();
    });
  }

  closeAlert(i: any) {
    this.alerts.splice(i, 1);
  }

  autoClose() {
    setTimeout(() => {
      this.alerts.pop();
    }, 2000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
