import { Component } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData:UserInfo={};
  frm:FormGroup=new FormGroup({
    name:new FormControl(''),
    location:new FormControl('Chennai'),
    email:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl(''),
  })
  constructor(private Srv:DataSourceService,private router:Router){

  }
  AddNewUser(){
    /*let userData:UserInfo={
      userId:this.frm.controls['userId'].value,
      displayName:this.frm.controls['displayName'].value,
      email:this.frm.controls['email'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value
    }*/
      let userData:UserInfoNew={
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      email:this.frm.controls['email'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value
      }
    console.log(userData);
    this.Srv.AddNewUserEntry(userData).subscribe(
      {
      next:(data)=>{
        this.router.navigate(['Home/AdminDashboard'])
      }
    }
    )
    //this.router.navigate(['UserList'])
}

}