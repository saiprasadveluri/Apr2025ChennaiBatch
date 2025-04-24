import { Component } from '@angular/core';
import { UserInfoNew } from '../user-info';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userEmail:string='';
  userPassword:string='';

constructor(private router:Router,private srv:DataSourceService){

}
Login(){
  this.srv.GetAllUsers().subscribe((data)=>{
    
    let loggedInUser:UserInfoNew|undefined=data.find((elm)=>{
      return elm.email==this.userEmail && elm.password==this.userPassword;
    });
    if(loggedInUser!=undefined){
      sessionStorage.setItem('UserData',JSON.stringify(loggedInUser));
      let userRole=loggedInUser.role;
      if(userRole=="Admin"){
        this.router.navigate(['home']);
      }
      else if(userRole=="Owner"){
        this.router.navigate(['ownerhome']);
      }
    }
  })

}
}

