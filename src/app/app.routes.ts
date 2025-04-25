import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { HostComponent } from './host/host.component';

export const routes: Routes = [
    { path: '', component:LoginComponent },  
    { path: 'manager', component:ManagerComponent},  
    { path: 'host', component: HostComponent}
    // {path  : 'restro' , component : AddresComponent},
    // {
    //   path : 'menu' , component : MenucardComponent
    // }
  ];







