import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTableComponent, LoginComponent, AdminPanelComponent, ErrorComponent } from './components';

export const routes: Routes = [
  {
    path: "",
    component: HomeTableComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent
  },
  {
    path: "**",
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
