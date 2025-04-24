import { Component, NgModule } from '@angular/core';
import { ResolveStart, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  { path: 'apphome', component: ApphomeComponent },
  {
    path: 'home', component: HomeComponent,canActivate:[accessGuard],data:{roles:['Admin']},
    children:[
      { path: "admin", component: AdminDashComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'adduser', component: AddUserComponent },
      // { path: '', redirectTo: 'userlist', pathMatch: 'full' },
      { path: 'AddRestaurant', component: AddRestaurantComponent },
      { path: 'ListRestaurant', component: ListRestaurantComponent },
      // { path: '', redirectTo: 'list-restaurant', pathMatch: 'full' },
      { path: 'EditUser/:id', component: EditUserComponent },
      {path:'',redirectTo:'admin',pathMatch:'full'},
    ],
  },
  {path:'ownerhome',component:OwnerhomeComponent,canActivate:[accessGuard],data:{roles:['Owner']},
  children:[
    { path: "owner", component: OwnerDashboardComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
