import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'app-home',component:AppHomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
  children:[
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'addrestaurant',component:AddrestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent},
  {path:'Restaurantlist',component:RestaurantlistComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'',redirectTo:'adminDashboard',pathMatch:'full'}]
  },
  {path:'ownerhome',component:OwnerhomeComponent,canActivate:[accessGuard],data:{roles:['Admin','Owner']},
  children:[
  {path:'ownerdashboard',component:OwnerdashboardComponent,
    children:[
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
