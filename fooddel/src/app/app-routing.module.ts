import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'addrestaurant',component:AddrestaurantComponent},
  {path:'',redirectTo:'userlist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
