import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewVisitorComponent } from './add-new-visitor/add-new-visitor.component';
import { HomeComponent } from './home/home.component';
import { VistorListComponent } from './vistor-list/vistor-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HostListComponent } from './host-list/host-list.component';
import { LoginComponent } from './login/login.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HostVistListComponent } from './host-vist-list/host-vist-list.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent,
    children:[
      {path:'Manager',component:ManagerComponent},
      {path:'AddNewVistor',component:AddNewVisitorComponent},
      {path:'VistList',component:VistorListComponent},
      {path:'AddHost',component:AddHostComponent},
      {path:'HostList',component:HostListComponent}
    ]
  },
  {path:'HostHome',component:HostHomeComponent,
    children:[
      {path:'HostVistList',component:HostVistListComponent},
      {path:'HostList',component:HostListComponent}
    ]
  }
  // {path:'AddNewVistor',component:AddNewVisitorComponent},
  // {path:'VistList',component:VistorListComponent},
  // {path:'Home',component:HomeComponent},
  // {path:'AddHost',component:AddHostComponent},
  // {path:'HostList',component:HostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
