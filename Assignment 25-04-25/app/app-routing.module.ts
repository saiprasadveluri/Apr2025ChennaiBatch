import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { AddhostComponent } from './addhost/addhost.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';``
import { HostvisitorlistComponent } from './hostvisitorlist/hostvisitorlist.component';
import { HosthomeComponent } from './hosthome/hosthome.component';


const routes: Routes = [
  {path:'apphome',component:ApphomeComponent},
  {path:'home',component:HomeComponent ,
    children:[
      {path:'visitorlist',component:VisitorlistComponent},
      {path:'Manager',component:ManagerdashboardComponent },
      {path:'addvisitor',component:AddVisitorComponent},
      {path:'editvisitor/:id',component:EditvisitorComponent},
      {path:'addhost',component:AddhostComponent},
      {path:'hostlist',component:HostlistComponent}
    ]
  },
  {path:'hosthome',component:HosthomeComponent,
    children:[
      {path:'hostvisitlist',component:HostvisitorlistComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
