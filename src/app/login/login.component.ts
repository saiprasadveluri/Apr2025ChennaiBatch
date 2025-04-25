import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerComponent } from '../manager/manager.component';
import { HostComponent } from "../host/host.component";
@Component({
  selector: 'app-login',
  imports: [ManagerComponent,HostComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router
  ){}
Manager() {
    this.router.navigate(['/manager']);
}
Host() {

  this.router.navigate(['host']);
}

}
