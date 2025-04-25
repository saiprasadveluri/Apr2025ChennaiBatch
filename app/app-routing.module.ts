import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { LoginComponent } from './login/login.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,
    canActivate:[authGuard],
    children:[
    {path:'visitors',component:VisitorListComponent},
    {path:'hosts',component:HostlistComponent},
    {path:'visitor-form',component:VisitorFormComponent},
    ]
  },
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
