import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddhostComponent } from './addhost/addhost.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { HomeComponent } from './home/home.component';
import { HostuserComponent } from './hostuser/hostuser.component';
import { HostdashComponent } from './hostdash/hostdash.component';

const routes: Routes = [
  { path: 'login', component: LoginhomeComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'manager', component: ManagerComponent },
      { path: "listV", component: VisitorListComponent },
      { path: "addV", component: AddvisitorComponent },
      { path: "listH", component: HostListComponent },
      { path: "addH", component: AddhostComponent },
      { path: '', redirectTo: 'manager', pathMatch: 'full' }
    ]
  },
  {path:"host", component:HostuserComponent,
    children:[
      {path:'hostdash', component:HostdashComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
