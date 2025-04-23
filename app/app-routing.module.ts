import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'',redirectTo:'UserList',pathMatch:'full'},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'RestaurantList',component:RestaurantListComponent},
  {path:'EditUser/:id',component:EditUserComponent},
  // {path:'',redirectTo:'list-restaurant',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }