import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './components/todo.component';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';

import { StoreModule } from '@ngrx/store';
import { TodoReducer } from '../application-states/todo.reducer';

import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../application-states/todo.effects';
import { TodoService } from '../service/todo.service';

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
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ todo: TodoReducer }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [TodoService],
})
export class TodoModule { }
