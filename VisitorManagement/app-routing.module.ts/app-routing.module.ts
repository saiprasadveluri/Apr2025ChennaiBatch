import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from './home/home.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';

const routes: Routes = [
  {path:'AppHome', component:AppHomeComponent},
  {path:'home', component:HomeComponent,
    children:[
      {path:'visitorList', component:VisitorListComponent},
      {path:'AddVisitor', component:AddVisitorComponent},
      {path:'hostList', component:HostListComponent},
      {path:'AddHost', component:AddHostComponent},
      {path:'EditVisitor/:id', component:EditVisitorComponent},
      {path:'EditHost/:id', component:EditHostComponent},
      {path:'ManagerDashboard', component:ManagerDashboardComponent},
      {path:'',redirectTo:'ManagerDashboard', pathMatch:'full'}
    ]
  },
  {path:'HostHome', component:HostHomeComponent,
    children:[
      {path:'HostDashboard', component:HostDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
