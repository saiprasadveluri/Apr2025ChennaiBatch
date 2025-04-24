import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent,
    children:[
      {path :'AdminDashboard',component:AdminDashboardComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path:'ViewRestaurant',component:ViewRestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent} ,
  {path:'EditRest/:id',component:EditRestComponent},
  //id is route parameter format url:para
  {path:'',redirectTo:'UserList',pathMatch:'full'}
  ]},
  {path:'OwnerHome',component:OwnerHomeComponent,
    children:[
      {path:'OwnerDashboard',component:OwnerDashboardComponent}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
