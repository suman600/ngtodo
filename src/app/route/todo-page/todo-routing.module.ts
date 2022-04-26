import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo.component'

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoRoutingModule { }
