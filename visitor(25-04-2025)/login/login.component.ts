import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorSourceService } from '../visitor-source.service';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail:string=""
  userPassword:string=""
  constructor(private router:Router,private srv:VisitorSourceService)
  {

  }
  Login()
  {
    this.srv.GetAllHostData().subscribe((data)=>{
      let loggedInHost:HostInfo|undefined=data.find((elm)=>{
        return elm.hemail==this.userEmail && elm.hpass==this.userPassword;
      })
      if(loggedInHost!=undefined)
      {
        sessionStorage.setItem('Data',JSON.stringify(loggedInHost))
        let userRole=loggedInHost.role
        if(userRole=="Manager")
        {
          this.router.navigate(['Home'])
        }
        else
        {
          this.router.navigate(['HostHome'])
        }
      }
    })
  }
}
