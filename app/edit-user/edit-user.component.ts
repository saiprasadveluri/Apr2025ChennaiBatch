import { Component, OnInit } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
 CurrentUser:UserInfoNew={};
  form:FormGroup = new FormGroup({
    name:new FormControl(this.CurrentUser.name),
    role:new FormControl(this.CurrentUser.role),
    location:new FormControl(this.CurrentUser.location),
    password:new FormControl(this.CurrentUser.password)
  });
  constructor(private srv:DataSourceService, private actRoute:ActivatedRoute, private router:Router){
    this.actRoute.paramMap.subscribe((parms)=>{
      let selid = parms.get('id');
      console.log(selid);
      if(selid!=null){
        this.srv.getUserDatabyId(selid).subscribe({
          next:(data)=>{
            console.log(data);
            this.CurrentUser=data;
            this.PrepareForm();
          }
        })

      }
    })
  }
  private PrepareForm():void{
    this.form.controls['name'].setValue(this.CurrentUser.name);
    this.form.controls['role'].setValue(this.CurrentUser.role);
    this.form.controls['location'].setValue(this.CurrentUser.location);
    this.form.controls['password'].setValue(this.CurrentUser.password);
    // this.form.controls['name'].setValue(this.CurrentUser.name);

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');/
  }
  EditUser(){
      this.CurrentUser.name=this.form.controls['name'].value;
      this.CurrentUser.role=this.form.controls['role'].value;
      this.CurrentUser.location=this.form.controls['location'].value;
      this.CurrentUser.password=this.form.controls['password'].value;
      this.srv.EditUser(this.CurrentUser).subscribe({
        next:(_)=>{
          this.router.navigate(['UserList'])
        }
      })

  }
}