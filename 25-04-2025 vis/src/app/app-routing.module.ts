import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitoeListComponent } from './visitoe-list/visitoe-list.component';
import { HomeComponent } from './home/home.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { AddhostComponent } from './addhost/addhost.component';

const routes: Routes = [
  {path:'visitoe-lis',component:VisitoeListComponent},
  {path:'home',component: HomeComponent},
  {path:'add-visitor',component:AddVisitorComponent},
  {path:'editvisitor/:id',component:EditvisitorComponent},
  {path:'hostlist',component:HostlistComponent},
  {path:'addhost',component:AddhostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
