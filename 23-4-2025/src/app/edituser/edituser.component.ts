import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfoNew } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{
  currentUser:UserInfoNew={
  }
   frm:FormGroup=new FormGroup({
      // userId:new FormControl(''),
      // id:new FormControl(''),
      name:new FormControl(this.currentUser.name),
      location:new FormControl(this.currentUser.location),
      role:new FormControl(this.currentUser.role),
      // email:new FormControl(this.currentUser.email),
      password: new FormControl(this.currentUser.password),
    });
   EditUser()
   {
    this.currentUser.name=this.frm.controls['name'].value;
    this.currentUser.location=this.frm.controls['location'].value;
    this.currentUser.role=this.frm.controls['role'].value;
    this.currentUser.password=this.frm.controls['password'].value;
    this.srv.EditUser(this.currentUser).subscribe(
      {
        next:(_)=>{
          this.router.navigate(['addlist'])
        }
      }
    )
    
   }
   constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute,private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetUserDataId(SelId).subscribe(
          {
            next:(data)=>{
              this.currentUser=data;
              this.PrepareForm();
            }
          }
        )
      }
    }) 
   }
   private PrepareForm(): void 
   {
    this.frm.controls['name'].setValue(this.currentUser.name);
    this.frm.controls['location'].setValue(this.currentUser.location);
    this.frm.controls['role'].setValue(this.currentUser.role);
    this.frm.controls['password'].setValue(this.currentUser.password);
   }


   ngOnInit(): void {
     
   }
  
}
