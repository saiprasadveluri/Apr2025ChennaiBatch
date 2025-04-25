import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { AppHomeComponent } from './app-home/app-home.component';



const routes: Routes = [
  {path:'app-home',component:AppHomeComponent},
  {path:'visitors',component: VisitorListComponent},
  {path:'hosts',component: HostListComponent},
  {path:'add-visitor',component: AddVisitorComponent},
  {path:'add-host',component: AddHostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
