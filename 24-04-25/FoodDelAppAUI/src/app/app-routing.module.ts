import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { OwnerDashBoardComponent } from './owner-dash-board/owner-dash-board.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'app-home',component:AppHomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
  children:[
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'RestaurantList',component:RestaurantListComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent},//Id is route parameter,format of url is EditUser/:id
  {path:'EditRestaurant/:id',component:EditRestaurantComponent},
  {path:'AdminDashBoard',component:AdminDashBoardComponent},
  {path:'',redirectTo:'AdminDashBoard',pathMatch:'full'}]
  },
  {path:'OwnerHome',component:OwnerHomeComponent,canActivate:[accessGuard],data:{roles:['Admin','Owner']},
    children:[
    {path:'OwnerDashBoard',component:OwnerDashBoardComponent,}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
