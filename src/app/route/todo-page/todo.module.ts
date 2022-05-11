import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './components/todo.component';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './application-states/todo.reducer';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoModalComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forRoot({ todo: todoReducer }),
  ],
})
export class TodoModule {}
