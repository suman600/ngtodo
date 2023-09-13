import { Todo } from "./core/todo.adaper";
import { ModalService } from "./service/modal.service";
import { Component } from "@angular/core";
import {map} from "rxjs";
import {TodoService} from "./service/todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  editTodo: any;
  viewTodo: any;
  editMode: boolean = false;

  tabs
  activeTab:string = 'All'

  constructor(
      private modalService: ModalService,
      private todoService: TodoService
  ) {
    this.tabs = [
      {text: 'All', icon: 'fas fa-bars'},
      {text: 'Completed', icon: 'fas fa-check'}
    ];
  }

  todoItemEvent({ mode, todo }: { mode: string; todo: Todo }) {
    if (mode == "editMode") {
      this.editTodo = todo;
      this.editMode = true;
    }
    if (mode == "viewMode") {
      this.viewTodo = todo;
      this.editMode = false;
    }
    if (this.viewTodo && mode == "updateMode") {
      this.viewTodo = todo;
    }
    if(mode =='closeMode'){
      this.editMode = false;
    }
  }
  addTodo() {
    this.modalService.modalState(true, "Add Todo", "Add");
  }

  activeTabFun(tab:any) {
    this.activeTab = tab.text;
    this.editMode = false;
    this.editTodo = null;
    this.viewTodo = null
  }

  completeAll(){
    this.todoService.getTodos().snapshotChanges().pipe(
      map((changes) =>
        changes.map((change) => ({
                  id: change.payload.doc.id,
                  ...change.payload.doc.data(),
                }))
      )
    )
    .subscribe((data) => {
      this.process(data)
    });
  }

  process(data:Todo[]){
    if(data){
      let filteredTodo : Todo[] = data.filter(item=>{
        return !item.completed
      })
      let allCompleted:Todo[] = filteredTodo.map(item =>{
        item.completed = true
        return item
      })
      this.todoService.completeAllTodo(allCompleted)
    }
  }

}
