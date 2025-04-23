import { Component } from '@angular/core';
import { UserInfo } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfoNew } from '../rest-info';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  frm:FormGroup=new FormGroup({
    // userId:new FormControl(''),
    // id:new FormControl(''),
    name:new FormControl(''),
    location:new FormControl('HYD'),
    role:new FormControl(1),
    email:new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private srv:DataSourceService,private router:Router){

  }
  AddNewUser(){
    let userData:UserInfoNew={
      // userId:this.frm.controls['userId'].value,
      // displayName:this.frm.controls['displayName'].value,
      // email:this.frm.controls['email'].value,
      // password:this.frm.controls['password'].value,
      // role:this.frm.controls['role'].value
      // id:this.frm.controls['id'].value,
       name:this.frm.controls['name'].value,
       location:this.frm.controls['location'].value,
       role:this.frm.controls['role'].value,
       email:this.frm.controls['email'].value,
       password:this.frm.controls['password'].value,
    };
  console.log(userData);
  this.srv.AddNewUserEntry(userData).subscribe({
    next:(data)=>{
      this.router.navigate(['addlist'])
    }
  });
  }
}
