import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from './home/home.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { AddHostComponent } from './add-host/add-host.component';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent,
    children:[
  {path:'Visitorlist',component:VisitorlistComponent},
  {path:'HostList',component:HostListComponent},
  {path:'AddVisitor',component:AddVisitorComponent},
  {path:'VisitorList',component:VisitorlistComponent},
  {path:'EditVisitor/:id',component:EditVisitorComponent},
  {path:'EditHost/:id',component:EditHostComponent},
  {path:'AddHost',component:AddHostComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
