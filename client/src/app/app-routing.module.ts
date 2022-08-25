import { AuthGuard } from './auth.guard';
import { AddGoalsComponent } from './pages/add-goals/add-goals.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'goals',
    canActivate:[AuthGuard],
    component:GoalsComponent
  },
  {
    path:'add-goals',
    canActivate:[AuthGuard],
    component:AddGoalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
