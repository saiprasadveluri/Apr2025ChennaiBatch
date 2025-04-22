import { Component } from '@angular/core';
import { Userinfo } from '../userinfo';
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
  userid:new FormControl(''),
  displayName:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
  role:new FormControl(1),
});
constructor(private srv:DataSourseService ,private router :Router)
{

}
AddNewUser() {
  let userData:Userinfo={
  userid: this.frm.controls['userid'].value,
  displayName:this.frm.controls['displayName'].value,
  email:this.frm.controls['email'].value,
  password:this.frm.controls['password'].value,
  role:this.frm.controls['role'].value,
}
console.log(userData);
this.srv.AddNewUserEntry(userData);
this.router.navigate(['UserList']);
}
}
