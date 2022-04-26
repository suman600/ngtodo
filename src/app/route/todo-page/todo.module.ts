import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './components/todo.component';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { TodoAddUpdateComponent } from './components/todo-add-update/todo-add-update.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoAddUpdateComponent

  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
