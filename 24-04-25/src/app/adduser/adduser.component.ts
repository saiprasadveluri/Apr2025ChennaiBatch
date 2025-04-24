import { Component } from '@angular/core';
import { Userinfo, UserInfoNow } from '../userinfo';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  userdata:Userinfo={}; 
  frm:FormGroup=new FormGroup({
    // userid:new FormControl(''),
    displayname:new FormControl(''),
    location:new FormControl('chennai'),
    email:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl(''),
  });
  constructor(private srv:DatasourceService ,private router:Router){

  }
  AddNewUser(){
    // let userdata:Userinfo={
    //   userid:this.frm.controls['userid'].value,
    //   displayname:this.frm.controls['displayname'].value,
    //   email:this.frm.controls['email'].value,
    //   password:this.frm.controls['password'].value,
    //   role:this.frm.controls['role'].value
    // } 
    let userdata:UserInfoNow={
      name:this.frm.controls['displayname'].value,
      location:this.frm.controls['location'].value,
      email:this.frm.controls['email'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value,
    }
    console.log(userdata);
    this.srv.AddNewUserEntry(userdata).subscribe(
      {
        next:(data)=>{
          this.router.navigate(['home/userlist']);
        }
      }
    );
   
  }

}
