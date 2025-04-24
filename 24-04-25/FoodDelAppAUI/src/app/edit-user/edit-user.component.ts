import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
    CurrentUser:UserInfoNew={};
    frm:FormGroup=new FormGroup({
      //userId:new FormControl(''),
      name:new FormControl(this.CurrentUser.name),
      location:new FormControl(this.CurrentUser.location),
      role:new FormControl(this.CurrentUser.role),
      //email:new FormControl(this.CurrentUser.email),
      password:new FormControl(this.CurrentUser.password),
    });
    constructor(private srv:DataSourceService,private activerouter:ActivatedRoute,private router:Router){ 
      this.activerouter.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        console.log(SelId);
        if(SelId!=null){
          this.srv.GetUserDataById(SelId).subscribe({
            next:(data)=>{
              console.log(data)
              this.CurrentUser=data;
              this.PrepareForm();
            }
          });
        }
      }) 
    }
    private PrepareForm():void{
      this.frm.controls['name'].setValue(this.CurrentUser.name);
      this.frm.controls['location'].setValue(this.CurrentUser.location);
      this.frm.controls['role'].setValue(this.CurrentUser.role);
      this.frm.controls['password'].setValue(this.CurrentUser.password);
    }
  ngOnInit(): void {
    
  }
  EditUser(){
   this.CurrentUser.name=this.frm.controls['name'].value;
   this.CurrentUser.location=this.frm.controls['location'].value;
   this.CurrentUser.role=this.frm.controls['role'].value;
   this.CurrentUser.password=this.frm.controls['password'].value;
   this.srv.EditUser(this.CurrentUser).subscribe({
    next:(_)=>{
      this.router.navigate(['UserList'])
    }
   })
  }
}
