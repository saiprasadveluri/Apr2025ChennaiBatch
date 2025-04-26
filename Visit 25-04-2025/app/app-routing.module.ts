import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { EditVisitorListComponent } from './edit-visitor-list/edit-visitor-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HostListComponent } from './host-list/host-list.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HostVisitiorListComponent } from './host-visitior-list/host-visitior-list.component';

const routes: Routes = [
  {path:'AppHome',component:AppHomeComponent},
  {path:'Home',component:HomeComponent, 
     children:[
            {path:'AddVisitor',component:AddVisitorComponent},
        {path:'VisitorList',component:VisitorListComponent},
        {path:'EditVisitor/:id',component:EditVisitorListComponent},
        {path:'AddHost',component:AddHostComponent},
        {path:'HostList',component:HostListComponent},
        {path:'',redirectTo:'VisitorList',pathMatch:'full'}
  
]},
   {path:'HostHome',component:HostHomeComponent,
  children:[
        {path:'HostVisitorLiist',component:HostVisitiorListComponent}
     ]
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
