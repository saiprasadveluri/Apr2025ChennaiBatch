import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'RestaurantList',component:RestaurantListComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent}, //Here is id is route param . format of url:
  {path:'EditRestaurant/:id',component:EditRestaurantComponent}, //Here is id is route param . format of url:
  {path:'',redirectTo:'UserList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
