import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from './home/home.component';
import { ManagerDashBoardComponent } from './manager-dash-board/manager-dash-board.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { HostDashBoardComponent } from './host-dash-board/host-dash-board.component';
import { HostHomeComponent } from './host-home/host-home.component';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent,
    children:[
      {path:'VisitorList',component:VisitorListComponent},
      {path:'AddVisitor',component:AddVisitorComponent},
      {path:'HostList',component:HostListComponent},
      {path:'AddHost',component:AddHostComponent},
      {path:'EditVisitor/:id',component:EditVisitorComponent},
      {path:'EditHost/:hid',component:EditHostComponent},
      {path:'ManagerDashBoard',component:ManagerDashBoardComponent},
      {path:'',redirectTo:'ManagerDashBoard',pathMatch:'full'}
    ]
  },
  {path:'HostHome',component:HostHomeComponent,
    children:[
    {path:'HostDashBoard',component:HostDashBoardComponent}, 
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
