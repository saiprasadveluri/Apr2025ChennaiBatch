import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
username='';
password='';
errormessage='';
constructor(private loginService:LoginService, private router:Router){}
  login():void{
    this.loginService.getUsers().subscribe(users=>{
      const user=users.find(u=>u.username===this.username&& u.password===this.password);
      if(user){
        if(user.role==='host'||user.role==='manager'){
          localStorage.setItem('userRole',user.role);
          this.router.navigate(['/dashboard']);
        }
        else{
          this.errormessage='sorry';
        }
      }else{
        this.errormessage='Invalid';
      }
    });
  }
  testNavigation():void{
    this.router.navigate(['/home']);
  }
}
