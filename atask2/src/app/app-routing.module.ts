import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpfeedbackComponent } from './empfeedback/empfeedback.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
 
 // {path: '' , pathMatch: 'full' , redirectTo: LoginComponent },
  {path:'login', component:LoginComponent},
  {path:'Employeescreen' , component:EmployeeComponent},
  {path:'managerscreen', component: ManagerComponent},
  {path: 'empfeedback' , component: EmpfeedbackComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
