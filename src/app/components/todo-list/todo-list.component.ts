import { ModalService } from "../../service/modal.service";
import { Todo } from "../../core/todo.adaper";
import { AlertService } from "../../service/alert.service";
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import { map } from "rxjs";
import { TodoService } from "src/app/service/todo.service";
import {LoaderService} from "../../service/laoder.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todos?: Todo[];
  todo?: Todo;
  loading: boolean = false;
  disabled:boolean = false
  enabled:boolean = false
  @Output() todoItemEvent = new EventEmitter<any>();
  constructor(
    private todoService: TodoService,
    private alertService: AlertService,
    private modalService: ModalService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.loaderService.loaderBehaviour({show: true, title: 'Loading...'})
    this.loading = true;
    this.todoService
      .getTodos()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            id: change.payload.doc.id,
            ...change.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.todos = data;
        this.loading = false;
        this.loaderService.loaderBehaviour({show: false, title: ''})
      });
  }

  deleteTodo(todo: Todo) {
    if (confirm("are you sure want to delete")) {
      this.todoService.deleteTodo(todo);
      this.alertService.showAlert("Todo deleted successfully", "danger");
    }
  }

  viewTodo(todo: Todo) {
    this.todoItemEvent.emit({mode: 'viewMode', todo});
  }

  editTodo(todo: Todo) {
    this.modalService.modalState(true, "Edit Todo", "Update");
    this.todoItemEvent.emit({mode: 'editMode', todo});
  }
  completeTodo(todo: Todo){
    this.disabled = !todo.completed
    this.enabled = todo.completed
    let _todo: Todo = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    }
    setTimeout(()=>{
      this.disabled = false;
      this.disabled = false;
      this.todoService.updateTodo(_todo)
    },2000)
  }

}
