import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'RestList',component:RestaurantListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'AddRest', component:AddRestaurantComponent },
  {path:'EditUser/:id', component:EditUserComponent },
  {path:'', redirectTo:'UserList', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
