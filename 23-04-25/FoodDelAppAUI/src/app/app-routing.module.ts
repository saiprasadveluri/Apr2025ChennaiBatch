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
  {path:'home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'RestaurantList',component:RestaurantListComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent},//Id is route parameter,format of url is EditUser/:id
  {path:'EditRestaurant/:id',component:EditRestaurantComponent},
  {path:'',redirectTo:'UserList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
