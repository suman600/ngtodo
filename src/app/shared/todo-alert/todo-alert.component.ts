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
  classType: string = "";

  subscription = new Subscription();
  timer$ = new Subject();

  constructor(public alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe((data) => {
      this.show = data.show;
      this.message = data.message;
      switch (data.type) {
        case "success":
          this.classType = "alert-success";
          break;
        case "danger":
          this.classType = "alert-danger";
          break;
        default:
          this.classType = "alert-success";
      }
    });
    this.autoClose();
  }

  closeAlert() {
    this.alertService.closeAlert();
  }

  autoClose() {
    interval(2000)
      .pipe(takeUntil(this.timer$))
      .subscribe(() => {
        this.alertService.closeAlert();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.timer$.next(0);
    this.timer$.complete();
  }
}
