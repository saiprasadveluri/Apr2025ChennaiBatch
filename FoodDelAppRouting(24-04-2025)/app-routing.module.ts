import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerDashComponent } from './owner-dash/owner-dash.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
    children:[
      {path:'AdminDashboard',component:AdminDashboardComponent},
      {path:'AddUser',component:AddUserComponent},
      {path:'AddRest',component:AddRestaurantComponent},
      {path:'EditUser/:id',component:EditUserComponent},
      {path:'RestList',component:RestListComponent},
      {path:'',redirectTo:'AdminDashboard',pathMatch:'full'}
    ]//here id is route]
  },
  {path:'OwnerHome',component:OwnerHomeComponent,canActivate:[accessGuard],data:{roles:['Owner']},
    children:[
      {path:'OwnerDash',component:OwnerDashComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
