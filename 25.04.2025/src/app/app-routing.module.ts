import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitorComponent } from './visitor/visitor.component';
import { HostComponent } from './host/host.component';
import { AddHostComponent } from './add-host/add-host.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HomeComponent } from './home/home.component';
import { HostVisitorListComponent } from './host-visitor-list/host-visitor-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent, 
    children:[

      {path:'',redirectTo:'dashboard',pathMatch:'full'},

      {path:'dashboard',component:DashboardComponent},
      {path:'visitors',component:VisitorComponent},
      {path:'hosts',component:HostComponent},
      {path:'add-host',component:AddHostComponent},
      {path:'add-visitor',component:AddVisitorComponent}

    ]
  },
  {path:'host-visitor-list',component:HostVisitorListComponent}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 }
