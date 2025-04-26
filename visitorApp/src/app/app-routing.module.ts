import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { HomeComponent } from './home/home.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { AddhostComponent } from './addhost/addhost.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { HostvisitorlistComponent } from './hostvisitorlist/hostvisitorlist.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';

const routes: Routes = [
  {path:'apphome',component:ApphomeComponent },
  {path:'home',component:HomeComponent,
    children:[

  {path:'visitorlist',component:VisitorlistComponent},
  {path:'Manager',component:ManagerdashboardComponent},
  {path:'addvisitor',component:AddvisitorComponent},
  {path:'editvisitor/:id',component:EditvisitorComponent},
  {path: 'hostlist',component:HostlistComponent},
  {path:'addhost',component:AddhostComponent},

]
  },
  {path:'hosthome',component:ApphomeComponent,
    children:[
      {path:'hostvisitorlist',component:HostvisitorlistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
