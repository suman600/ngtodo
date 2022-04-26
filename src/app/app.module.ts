import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoListComponent } from './route/todo-page/components/todo-list/todo-list.component';
import { TodoViewComponent } from './route/todo-page/components/todo-view/todo-view.component';
import { TodoAddUpdateComponent } from './route/todo-page/components/todo-add-update/todo-add-update.component';
import { TodoService } from './services/todo-service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
