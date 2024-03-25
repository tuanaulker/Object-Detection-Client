import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTableComponent, LoginComponent, AdminPanelComponent, ErrorComponent } from './components';

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" }, //bu kod satırı boş yolu login sayfasına yönlendirecek.
  {path: "login",component: LoginComponent},
  {path: "admin-panel",component: AdminPanelComponent},
  {path: "",component: HomeTableComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }