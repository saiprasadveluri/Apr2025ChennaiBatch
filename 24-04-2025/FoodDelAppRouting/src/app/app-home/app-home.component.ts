import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  uemail:string="";
  upassword:string=""
  constructor(private router:Router,private srv:DataSourceService){

  }
  Login(){
    this.srv.GetAllUsers().subscribe((data)=>{
      let loggedInUser:UserInfoNew|undefined=data.find((elm)=>{
        return elm.email==this.uemail&& elm.password==this.upassword
      });
      if(loggedInUser!=undefined){
        sessionStorage.setItem('UserData',JSON.stringify(loggedInUser))
        let userRole=loggedInUser.role
        if(userRole=="Admin"){
          this.router.navigate(['Home'])
        }
        else if(userRole=="Owner"){
          this.router.navigate(['OwnerHome'])
        }
      }
    })
  }
}
