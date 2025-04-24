import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewrestaurantComponent } from './viewrestaurant/viewrestaurant.component';
import { AapphomeComponent } from './aapphome/aapphome.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'aapphome',component:AapphomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
    children:[
      {path:'adminDashboard',component:AdmindashboardComponent},
      {path:'UserList',component:UserListComponent},
      {path:'AddUser',component:AddUserComponent},
      {path:'AddRestaurant',component:AddRestaurantComponent},
      {path:"EditUser/:id",component:EdituserComponent},//id is root parameter 
      {path:"ViewRestaurant",component:ViewrestaurantComponent},
      {path:"EditRest/:id",component:EditrestaurantComponent},
      {path:'',redirectTo:'adminDashboard',pathMatch:"full"}
    ]
    },
    {path:'ownerhome',component:OwnerhomeComponent,canActivate:[accessGuard],data:{roles:['Admin','Owner']},
      children:[
        {
          path:"ownerDashboard",component:OwnerdashboardComponent
        }
      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
