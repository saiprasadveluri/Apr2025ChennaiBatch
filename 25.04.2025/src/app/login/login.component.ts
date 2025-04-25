import { Component } from '@angular/core';
import { AuthentService } from '../authent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string='';
  password:string='';
  error='';

  constructor(private authService:AuthentService,private router: Router){

  }

  login(){

    this.authService.login(this.username, this.password).subscribe({
      next:(user)=>{
        if(user.role==='manager'){
          this.router.navigate(['/home']);
        }
        else if(user.role==='Host'){
          this.router.navigate(['/host-visitor-list']);
        }
        else{
          this.router.navigate(['/visitors']);
        }
      },
      error: ()=>this.error='Invalid username or password'
    });

  }

}
