import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorSourceService } from '../visitor-source.service';
import { VisitorInfo } from '../visitor-info';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  uemail:string="";
  upassword:string=""
  constructor(private router:Router,private srv:VisitorSourceService){

  }
  Login(){
    this.srv.GetAllHosts().subscribe((data)=>{
      let loggedInUser:HostInfo|undefined=data.find((elm)=>{
        return elm.email==this.uemail&& elm.password==this.upassword
      });
      if(loggedInUser!=undefined){
        sessionStorage.setItem('Data',JSON.stringify(loggedInUser))
        let userRole=loggedInUser.role
        if(userRole=="Manager"){
          this.router.navigate(['Home'])
        }
        else{
          this.router.navigate(['HostHome'])
        }
      }
    })
  }
}
