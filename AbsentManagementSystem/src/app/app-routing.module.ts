import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { StudentsComponent } from './Components/students/students.component';

const routes: Routes = [

  {path : '' , redirectTo : 'login' , pathMatch: 'full'},
  {path : 'login' , component : LoginComponent},
  {path : 'admin' , component : HomeComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'students' , component : StudentsComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
