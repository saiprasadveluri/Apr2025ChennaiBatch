import { Component, NgModule } from '@angular/core';
import { mapToCanActivate, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { combineLatest } from 'rxjs';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'apphome',component:AppHomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
    children:[
      {path:'adminDashboard',component:AdminDashboardComponent},
      {path:'userlist',component:UserlistComponent},
      {path:'adduser',component:AddUserComponent},
      {path:'AddRestaurant',component:AddRestaurantComponent},
      {path:'EditUser/:id',component:EditUserComponent},
      {path:'ListRestaurant',component:ListRestaurantComponent},
      {path:'',redirectTo:'adminDashboard',pathMatch:'full'},
    ],
  },
  {path:"ownerhome",component:OwnerHomeComponent,canActivate:[accessGuard],data:{roles:['Owner']},
    children:[
    {path:"ownerdashboard",component:OwnerDashboardComponent} 
  ]},
  
  //{path:'',redirectTo:'list-restaurant',pathMatch:'full'},
 // {path:'',redirectTo:'list-restaurant',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
