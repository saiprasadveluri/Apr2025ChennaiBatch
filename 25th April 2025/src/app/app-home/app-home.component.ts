import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { hostInfo } from '../user-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  email:string="";
  password:string="";
  constructor(private router:Router, private srv:DataSourceService)
  {

  }

  Login()
  {
    this.srv.GetAllHosts().subscribe((data)=>{
      let loggedInUser:hostInfo|undefined=data.find
      ((elm)=>{
        return elm.email==this.email && elm.password==this.password;
      });
      if(loggedInUser!=undefined)
      {
        sessionStorage.setItem('hostData',JSON.stringify(loggedInUser));
        let userRole = loggedInUser.role;
        if(userRole=='manager')
        {
          this.router.navigate(['home/managerDashboard']);
        }
        else
        {
          this.router.navigate(['hostHome/hostDashboard']);
        }
      }

    })
  }
}
