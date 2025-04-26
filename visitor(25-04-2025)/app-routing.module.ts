import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HomeComponent } from './home/home.component';
import { HostListComponent } from './host-list/host-list.component';
import { LoginComponent } from './login/login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HostVisitListComponent } from './host-visit-list/host-visit-list.component';
import { AddHostComponent } from './add-host/add-host.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent,
    children:[
      {path:'Manager',component:AppHomeComponent},
      {path:'AddVisit',component:AddVisitorComponent},
      {path:'VisitList',component:VisitorListComponent},
      {path:'EditVisit/:id',component:AddVisitorComponent},
      {path:'HostList',component:HostListComponent},
      {path:'AddHost',component:AddHostComponent}
    ]
  },
  {path:'HostHome',component:HostHomeComponent,
    children:[
      {path:"HostVisitorList",component:HostVisitListComponent}
    ]
  },
  // {path:'AddVisit',component:AddVisitorComponent},
  // {path:'VisitList',component:VisitorListComponent},
  // {path:'EditVisit/:id',component:AddVisitorComponent},
  // {path:'HostList',component:HostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
