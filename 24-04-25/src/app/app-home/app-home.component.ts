import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';
import { UserInfoNow } from '../userinfo';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userEmail:string='';
  userPassword:string=''
  constructor(private router:Router,private srv:DatasourceService){

  }

  Login(){
    this.srv.GetAllUsers().subscribe((data)=>{
      let loggedInUser:UserInfoNow|undefined=data.find((elm)=>{
        return elm.email==this.userEmail && elm.password==this.userPassword;
      })
      if(loggedInUser!=undefined)
      {
        sessionStorage.setItem('Userdata',JSON.stringify(loggedInUser));
        let userRole=loggedInUser.role;
        if(userRole=="Admin"){
          this.router.navigate(['home'])
        }
        else if(userRole=="Owner"){
          this.router.navigate(['app-ownerhome'])

        }
      }
    })
  

  }
}
