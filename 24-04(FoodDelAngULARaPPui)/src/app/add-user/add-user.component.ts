import { Component } from '@angular/core';
import { Userinfo, UserinfoNew } from '../userinfo';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourseService } from '../data-sourse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
userData:Userinfo={};
frm:FormGroup=new FormGroup({
  displayName:new FormControl(''),
  location:new FormControl('CHN'),
  email:new FormControl(''),
  password:new FormControl(''),
  role:new FormControl(''),
});
constructor(private srv:DataSourseService ,private router :Router)
{

}
AddNewUser() {
//   let userData:Userinfo={
//   userid: this.frm.controls['userid'].value,
//   displayName:this.frm.controls['displayName'].value,
//   email:this.frm.controls['email'].value,
//   password:this.frm.controls['password'].value,
//   role:this.frm.controls['role'].value,
// }
let userData:UserinfoNew={
  name:this.frm.controls['displayName'].value,
  location:this.frm.controls['location'].value,
  role:this.frm.controls['role'].value,
  email:this.frm.controls['email'].value,
  password:this.frm.controls['password'].value,

}
console.log(userData);
this.srv.AddNewUserEntry(userData).subscribe(
  {
  next:(data)=>{
this.router.navigate(['home/UserList']);
}
}
);
}
}

