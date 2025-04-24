import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';
import { UserInfo, UserInfoNew } from '../user-info';

@Component({
  selector: 'app-aapphome',
  templateUrl: './aapphome.component.html',
  styleUrls: ['./aapphome.component.css']
})
export class AapphomeComponent {
  userEmail:string="";
  userPassword:string=""
  constructor(private router:Router,private srv:DatasourceService)
  {

  }
  Login()
  {
    this.srv.GetAllUsers().subscribe((data)=>{
      let loggedInUser:UserInfoNew|undefined=data.find((elm)=>{

        return elm.email==this.userEmail && elm.password==this.userPassword;
      }
      );
      if(loggedInUser!=undefined)
      {

        sessionStorage.setItem('UserData',JSON.stringify(loggedInUser));
        let userRole=loggedInUser.role;
        if(userRole=="Owner")
        {
          this.router.navigate(['ownerhome']);
        }
        else if (userRole=="Admin")
        {
          this.router.navigate(['home']);
        }
      }
    })
  }

}
