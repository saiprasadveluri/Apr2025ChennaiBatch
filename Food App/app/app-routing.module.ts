import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'',redirectTo:'userlist',pathMatch:'full'},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'ListRestaurant',component:ListRestaurantComponent},
  {path:'',redirectTo:'list-restaurant',pathMatch:'full'},
  {path:'EditUser/:id',component:EditUserComponent},
  // {path:'',redirectTo:'list-restaurant',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
