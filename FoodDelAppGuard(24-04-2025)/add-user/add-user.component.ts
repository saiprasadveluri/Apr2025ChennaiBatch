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
frm:FormGroup=new FormGroup({
  displayName:new FormControl(''),
  location:new FormControl('CHN'),
  email:new FormControl(''),
  password:new FormControl(''),
  role:new FormControl('')
})
constructor(private srv:DataSourceService,private router:Router)//service injection
{

}
AddNewUser()
{
  // let userData:UserInfo={
  //   userId:this.frm.controls['userId'].value,
  //   displayName:this.frm.controls['displayName'].value,
  //   email:this.frm.controls['email'].value,
  //   password:this.frm.controls['password'].value,
  //   role:this.frm.controls['role'].value
  // }
  // console.log(userData)
  // this.srv.AddNewUserEntry(userData)
  // this.router.navigate(['UserList'])//to implement programatical Navigation
  let userData:UserInfoNew={
    name:this.frm.controls['displayName'].value,
    role:this.frm.controls['role'].value,
    location:this.frm.controls['location'].value,
    email:this.frm.controls['email'].value,
    password:this.frm.controls['password'].value
  }
  console.log(userData)
  this.srv.AddNewUserEntry(userData).subscribe(
    {
    next:(data)=>{
      this.router.navigate(['Home/AdminDash'])
    }
  }
  )
  }
}
