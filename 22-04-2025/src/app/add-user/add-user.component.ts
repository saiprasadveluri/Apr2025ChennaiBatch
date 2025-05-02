import { Component } from '@angular/core';
import { UserInfo } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData:UserInfo={};
  frm:FormGroup =new FormGroup({
    userId:new FormControl(""),
    displayName:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl(""),
    role:new FormControl("")
  });
  constructor(private srv:DatasourceService,private router:Router)
  {

  }
  AddNewUser(){
    let userData:UserInfo={
      userId:this.frm.controls['userId'].value,
      displayName:this.frm.controls['displayName'].value,
      email:this.frm.controls['email'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value
    }
    console.log(userData);
    this.srv.AddNewUserEntry(userData);
    this.router.navigate(["UserList"]);
    
  }

}
