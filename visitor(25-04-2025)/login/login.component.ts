import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { VistorInfo } from '../vistor-info';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  useremail:string='';
  userpswd:string='';
  constructor(private router:Router,private srv:DataSourceService)
  {
  
  }
    Login()
    {
      this.srv.GetHostData().subscribe((data)=>{
        let loggedInUser:HostInfo|undefined=data.find((elm)=>{
          return elm.hemail==this.useremail && elm.hpswd==this.userpswd;
        })
        if(loggedInUser!=undefined)
        {
           sessionStorage.setItem('Data',JSON.stringify(loggedInUser))
          let userRole=loggedInUser.role;
          if(userRole=="manager")
          {
            this.router.navigate(['Home'])
          }
          if(userRole=="host")
          {
            this.router.navigate(['HostHome'])
          }
        }
      })
    }
}
