import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from '../host.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = '';
  password: string = '';
  error = '';
  constructor (private router:Router, private hostService:HostService){}

  login(){
    this.hostService.login(this.username, this.password).subscribe(users => {
      if(users.length > 0){
        const user = users[0];
        localStorage.setItem('hostId',user.id);
        this.router.navigate(['/dashboard'])
      }
      else{
        this.error = 'invalid cred';
      }
    });
  }
}
