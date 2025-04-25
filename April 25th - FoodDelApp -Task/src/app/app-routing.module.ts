import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { HostListComponent } from './host-list/host-list.component';
import { EditHostComponent } from './edit-host/edit-host.component';

const routes: Routes = [
  {path:'AddVisitor',component:AddVisitorComponent},
  {path:'EditVisitor',component:EditVisitorComponent},
  {path:'VisitorList',component:VisitorListComponent},
  {path:'HostList',component:HostListComponent},
  {path:'EditHost',component:EditHostComponent},
  {path:'AddHost',component:AddHostComponent},
  {path:'',redirectTo:'VisitorList',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
