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
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerDashComponent } from './owner-dash/owner-dash.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['ADMIN']},
    children:[
      {path:'AdminDash',component:AdminDashboardComponent},
      {path:'UserList',component:UserListComponent},
      {path:'AddUser',component:AddUserComponent},
      {path:'AddRest',component:AddRestaurantComponent},
      {path:'EditUser/:id',component:EditUserComponent},
      {path:'RestList',component:RestListComponent},
      {path:'EditRest/:id',component:EditRestComponent},
      {path:'',redirectTo:'AdminDash',pathMatch:'full'}
    ]
  },
  {path:'OwnerHome',component:OwnerHomeComponent,canActivate:[accessGuard],data:{roles:['Owner','ADMIN']},
    children:[
      {path:'OwnerDash',component:OwnerDashComponent}
    ]
  }
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
