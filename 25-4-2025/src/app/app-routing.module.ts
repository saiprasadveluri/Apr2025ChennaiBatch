import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhostComponent } from './addhost/addhost.component';
import { HomeComponent } from './home/home.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { HostdashboardComponent } from './hostdashboard/hostdashboard.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { EdithostComponent } from './edithost/edithost.component';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { HosthomeComponent } from './hosthome/hosthome.component';

const routes: Routes = [
  {path:'apphome',component:ApphomeComponent},
      {path:'home',component:HomeComponent,
        children:[
          {path:'visitorlist',component:VisitorlistComponent},
          {path:'addvisitor',component:AddvisitorComponent},
          {path:'addhost',component:AddhostComponent},
          {path:"editvisitor/:id",component:EditvisitorComponent},
          {path:'edithost/:id',component:EdithostComponent},
          {path:"hostlist",component:HostlistComponent},
          {path:"managerdashboard",component:ManagerdashboardComponent},
          {path:'',redirectTo:'managerdashboard',pathMatch:"full"}
        ]
      },
      {path:"hosthome",component:HosthomeComponent,
        children:[
          {path:"hostdashboard",component:HostdashboardComponent},

        ]
      },
    ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
