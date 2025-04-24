import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';
import { UserType } from '../user-type';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userEmail:string=""
  userPassword:string=""
  constructor(private router:Router,private srv:DataSourceService)
  {

  }
  Login()
  {
    this.srv.GetAllUser().subscribe((data)=>{
      let loggedInUser:UserInfoNew|undefined=data.find((elm)=>{
        return elm.email==this.userEmail && elm.password==this.userPassword;
      })
      if(loggedInUser!=undefined)
      {
        sessionStorage.setItem('UserData',JSON.stringify(loggedInUser))
        let userRole=loggedInUser.role
        if(userRole?.toUpperCase()==UserType.ADMIN.toUpperCase())
        {
          this.router.navigate(['Home'])
        }
        else if(userRole?.toUpperCase()==UserType.OWNER.toUpperCase())
        {
          this.router.navigate(['OwnerHome'])
        }
      }
    })
  }
}
