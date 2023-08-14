import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "todo",
    component: AppComponent,
  },
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "todo",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
