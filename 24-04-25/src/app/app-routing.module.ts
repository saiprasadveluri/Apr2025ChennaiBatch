import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { accessGuard } from './access.guard';

const routes: Routes = [

  {path:'apphome',component:AppHomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
  children:[
    {path:'admindashboard',component:AdminDashboardComponent },
     {path:'userlist',component:UserlistComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'addrestaurant',component:AddrestaurantComponent},
    {path:'EditUser/:id',component:EditUserComponent },  //here id is in edituser parameters
    {path:'RestaurantList',component:RestaurantListComponent},
    {path:'EditRestauarant/:id',component:EditrestaurantComponent },
    // {path:'',redirectTo:'userlist',pathMatch:'full'}
    {path:'',redirectTo:'admindashboard',pathMatch:'full'}
  ]
  },
  {path:'app-ownerhome',component:OwnerhomeComponent,canActivate:[accessGuard],data:{roles:['Admin','Owner']},
  children:[
    {path:'ownerdashboard',component:OwnerdashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
