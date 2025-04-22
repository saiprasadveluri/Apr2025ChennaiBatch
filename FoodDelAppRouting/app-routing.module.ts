import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'',redirectTo:'UserList',pathMatch:'full'},
  {path:'AddRest',component:AddRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
