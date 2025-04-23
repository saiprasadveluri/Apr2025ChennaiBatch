import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddlistComponent } from './addlist/addlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditrestComponent } from './editrest/editrest.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'addlist',component:AddlistComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'AddRestaurent',component:AddRestaurentComponent},
  {path:'RestaurentList',component:RestaurentListComponent},
  {path:'edituser/:id',component:EdituserComponent},
  {path:'editrest/:id',component:EditrestComponent},
  {path:'',redirectTo:'RestaurentList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//done