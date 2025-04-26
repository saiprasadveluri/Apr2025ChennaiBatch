import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userEmail:string='';
  userPassword:string='';
  constructor(private router:Router,private srv:DataSourceService)
  {
  
  }
  Login()
  {
    this.srv.GetAllHost().subscribe((data)=>{
      let loggedInUser:HostInfo|undefined= data.find((elm)=>{
        return elm.email==this.userEmail && elm.password==this.userPassword
      });
        if(loggedInUser!=undefined)
        {
          localStorage.setItem('UserData',JSON.stringify(loggedInUser))
          let userRole=loggedInUser.role;
          if(userRole=="Host")
          {
            this.router.navigate(['HostList'])
          }
          else if(userRole=="Manager")
            {
              this.router.navigate([''])
            }
          
        }
    })
  }
  }

