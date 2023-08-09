import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  todo: any;

  constructor() {}

  todoItemEvent(param: any) {
    this.todo = param;
    console.log(this.todo);
  }
}
