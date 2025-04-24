import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userEmail:string = '';
  userPassword:string = '';
  users:any [] = [];
  constructor(    private router: Router, private userService: UserService
  ){}
  /*Login(){

    this.userService.getUsers().subscribe(data => {
      let LogedInUser:UserInfo|undefined = data.find(elm)=>{
        return elm.email= this.userEmail && elementAt.password == this.userPassword;
      }
    });
    if(LogedInUser!= undefined){
      let userRole = LogedInUser.role
    }
  }*/
}
