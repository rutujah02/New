import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'edit-task', component: EditTaskComponent},
  { path: 'add-task', component:AddTaskComponent},
  { path: 'add-task/:id', component: AddTaskComponent },
  { path: 'login', component:LoginComponent},
  {path: 'notifications', component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
