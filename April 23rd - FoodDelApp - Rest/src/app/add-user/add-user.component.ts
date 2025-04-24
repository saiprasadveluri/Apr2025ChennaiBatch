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

frm:FormGroup = new FormGroup({
  displayName:new FormControl(''),
  location:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
  role:new FormControl('')
});


constructor(private srv:DataSourceService, private router:Router)
{

}


AddNewUser()
{
  let userData:UserInfoNew={
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
        this.router.navigate(['UserList']);
      }
    }
  );
}
}
