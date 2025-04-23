import { Component } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userD:UserInfo={};
  form:FormGroup = new FormGroup({
    name:new FormControl(''),
    role:new FormControl(''),
    location:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  });
  constructor(private datasrv:DataSourceService,private router:Router){

  }
  addnewuser(){
    // let userD:UserInfo={
    //   ID:this.form.controls['Id'].value,
    //   name:this.form.controls['name'].value,
    //   email:this.form.controls['email'].value,
    //   password:this.form.controls['password'].value
    // }
    let userDNew:UserInfoNew={
      name:this.form.controls['name'].value,
      role:this.form.controls['role'].value,
      location:this.form.controls['location'].value,
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value
    }
    console.log(userDNew)
    // this.datasrv.AddNewUserentry(userDNew);
    this.datasrv.AddNewUserentry(userDNew).subscribe({
      next:(data)=>
      {
        this.router.navigate(['userlist']);
      }
    })
    
  }
}
