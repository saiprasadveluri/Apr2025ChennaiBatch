import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'',redirectTo:'UserList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
