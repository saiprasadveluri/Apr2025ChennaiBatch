import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { EditRestaurantListComponent } from './edit-restaurant-list/edit-restaurant-list.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
{path:'apphome',component:AppHomeComponent},
{path:'home',component:HomeComponent, canActivate:[accessGuard],data:{roles:['Admin']},
  children:[
  {path:'AdminDashboard',component:AdminDashboardComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent},
  {path:'RestaurantList',component:RestaurantListComponent},
  {path:'EditRestaurant',component:EditRestaurantListComponent},
  {path:'',redirectTo:'AdminDashboard',pathMatch:'full'}]
  },
{path:'ownerhome',component:OwnerHomeComponent,canActivate:[accessGuard],data:{roles:['Admin','Owner']},
   children:[
    {path:'ownerDashboard',component:OwnerDashboardComponent}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
