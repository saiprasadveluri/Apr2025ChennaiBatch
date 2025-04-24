import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestrauntComponent } from './add-restraunt/add-restraunt.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { AdminComponent } from './admin/admin.component';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  {path:'AppHome', component:AppHomeComponent},
  {path:'home', component:HomeComponent,
  children: [{path:'Admin', component:AdminComponent},
    {path:'UserList', component:UserlistComponent},
    {path:'AddUser', component:AddUserComponent},
    { path: 'add-user', component: AddEditUserComponent },
    {path:'AddRestraunt', component:AddRestrauntComponent},
    { path: 'edit-user/:id', component: AddEditUserComponent},
    {path: '',redirectTo:"UserList", pathMatch:'full'}]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
