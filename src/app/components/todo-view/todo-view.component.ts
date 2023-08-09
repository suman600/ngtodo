import { Todo } from "./../../core/todo.adaper";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-view",
  templateUrl: "./todo-view.component.html",
  styleUrls: ["./todo-view.component.scss"],
})
export class TodoViewComponent implements OnInit {
  @Input() todo: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.todo);
  }
}
