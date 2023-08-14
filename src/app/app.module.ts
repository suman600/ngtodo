import { ModalService } from "./service/modal.service";
import { AlertService } from "./service/alert.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { AngularFireModule } from "@angular/fire/compat/";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoModalComponent } from "./components/todo-modal/todo-modal.component";
import { TodoViewComponent } from "./components/todo-view/todo-view.component";
import { TodoAlertComponent } from "./shared/todo-alert/todo-alert.component";
import { TodoService } from "./service/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoViewComponent,
    TodoModalComponent,
    TodoAlertComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [TodoService, AlertService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
