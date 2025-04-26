import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from './home/home.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HostListComponent } from './host-list/host-list.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { AddHostComponent } from './add-host/add-host.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HostHomeComponent } from './host-home/host-home.component';

const routes: Routes = [
  {path: 'apphome', component:AppHomeComponent},
  {path : 'home', component:HomeComponent,
    children:[
      {path: 'managerDashboard',component:ManagerDashboardComponent},
      {path: 'hostList',component:HostListComponent},
      {path: 'visitorList',component:VisitorListComponent},
      {path: 'editVisitor',component:EditVisitorComponent},
      {path: 'editHost/id',component:EditHostComponent},
      {path: 'addHost',component:AddHostComponent},
      {path: 'addVisitor',component:AddVisitorComponent},
      {path:'', redirectTo: 'managerDashboard',pathMatch:"full"}
    ]
  },
  {path:'hostHome', component:HostHomeComponent,
    children:[
      {path:'hostDashboard', component:HostDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
 }
