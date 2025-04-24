import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddlistComponent } from './addlist/addlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditrestComponent } from './editrest/editrest.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {path:'apphome',component:AppHomeComponent},
  {path:'home',component:HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
    children:[
      {path:'adminDashboard',component:AdminDashboardComponent},
      {path:'addlist',component:AddlistComponent},
      {path:'adduser',component:AdduserComponent},
      {path:'AddRestaurent',component:AddRestaurentComponent},
      {path:'RestaurentList',component:RestaurentListComponent},
      {path:'edituser/:id',component:EdituserComponent},
      {path:'editrest/:id',component:EditrestComponent},
      {path:'',redirectTo:'adminDashboard',pathMatch:'full'}]
  },
  {path:'ownerhome',component:OwnerhomeComponent,canActivate:[accessGuard],data:{roles:['Admin','Owner']},
    children:[
      {path:'ownerdashboard',component:OwnerdashboardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//done
