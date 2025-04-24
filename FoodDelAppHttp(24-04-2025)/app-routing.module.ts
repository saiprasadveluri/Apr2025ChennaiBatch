import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent,
    children:[
      {path:'AdminDash',component:AdminDashboardComponent},
      {path:'UserList',component:UserListComponent},
      {path:'AddUser',component:AddUserComponent},
      {path:'AddRest',component:AddRestaurantComponent},
      {path:'EditUser/:id',component:EditUserComponent},
      {path:'',redirectTo:'AdminDash',pathMatch:'full'}
    ]
  },
  // {path:'RestList',component:RestListComponent},
  // {path:'EditRest/:id',component:EditUserComponent},
  // {path:'EditUser/:id',component:EditUserComponent},//here id is route param, format
  // {path:'',redirectTo:'UserList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
