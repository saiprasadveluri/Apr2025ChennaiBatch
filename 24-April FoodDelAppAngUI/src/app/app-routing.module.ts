
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
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'apphome',component:AppHomeComponent},
  {path:'home',component:HomeComponent, canActivate:[accessGuard],data:{roles:['Admin']},
   children:[
    {path:'adminDashboard', component:AdminDashboardComponent}, 
  {path:'UserList', component:UserListComponent},
  {path:'AddUser', component:AddUserComponent},
  {path:'RestaurantList', component:RestaurantListComponent},
  {path:'AddRestaurant', component:AddRestaurantComponent},
  {path:'EditUser/:id', component:EditUserComponent},
  {path:'EditRestaurant/:id', component:EditRestaurantComponent},
  {path:'',redirectTo:'UserList',pathMatch:'full'}
]
   },
   {path:'ownerhome',component:OwnerHomeComponent,canActivate:[accessGuard],data:{roles:['Owner']},
   children:[
    {path:'OwnerDashboard',component:OwnerDashboardComponent},

   ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
