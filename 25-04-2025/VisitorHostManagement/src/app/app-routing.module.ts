import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { ViewHostListComponent } from './view-host-list/view-host-list.component';
 import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from './home/home.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { VisitorDashboardComponent } from './visitor-dashboard/visitor-dashboard.component';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent,
    children:[
      {path:'VisitorDashboard',component:VisitorDashboardComponent},
  {path:'VisitorList',component:VisitorListComponent},
  {path:'AddVisitor',component:AddVisitorComponent},
  {path:'EditVisitor/:id',component:EditVisitorComponent},
  {path:'AddHost',component:AddHostComponent},
  {path:'ViewHostList',component:ViewHostListComponent},
  {path:'',redirectTo:'VisitorList',pathMatch:'full'}
]},
{path:'HostHome',component:HostHomeComponent,
  children:[
    {path:'ViewHostList',component:ViewHostListComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
