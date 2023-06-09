import { StudentsListComponent } from './students-list/students-list.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: DashboardComponent},
  {path: "students", component: StudentsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
