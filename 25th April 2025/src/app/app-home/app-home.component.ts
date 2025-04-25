import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { HostInfo } from '../visitor-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userId:string='';
  password:string='';
  constructor(private router:Router, private srv:DataSourceService){

  }
  Login(){
    this.srv.GetAllHosts().subscribe((data)=>{
      let loggedInUser:HostInfo|undefined=data.find((elm)=>{
        return elm.userId==this.userId && elm.password == this.password;
      });
      if(loggedInUser!=undefined){
        sessionStorage.setItem('HostData',JSON.stringify(loggedInUser));
        let userRole=loggedInUser.role;
        if(userRole == 'Manager'){
          this.router.navigate(['home']);
        }
        else{
          this.router.navigate(['HostHome']);
        }
      }
    });
  }
}
