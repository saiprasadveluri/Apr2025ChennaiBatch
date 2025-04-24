import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfoNew } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  currentUser:UserInfoNew={}
  frm:FormGroup=new FormGroup({
      name:new FormControl(this.currentUser.name),
      location:new FormControl(this.currentUser.location),
      //email:new FormControl(''),
      //password:new FormControl(this.currentUser.password),
      role:new FormControl(this.currentUser.role),
    })
    constructor(private Srv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router){
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId =prms.get('id')
        if(SelId!=null){
          this.Srv.GetUserDataById(SelId).subscribe({
            next:(data)=>{
              this.currentUser=data
              this.PrepareForm()
            }
          })
        }
      })
    }
  ngOnInit(): void {

   //this.Srv.GetUserDataById()
  }
  private PrepareForm():void{
    this.frm.controls['name'].setValue(this.currentUser.name)
    this.frm.controls['location'].setValue(this.currentUser.location)
    this.frm.controls['role'].setValue(this.currentUser.role)
    //this.frm.controls['password'].setValue(this.currentUser.password)
  }
  EditUser(){
    this.currentUser.name=this.frm.controls['name'].value;
    this.currentUser.location=this.frm.controls['location'].value;
    this.currentUser.role=this.frm.controls['role'].value;
    //this.currentUser.password=this.frm.controls['password'].value;
    this.Srv.EditUser(this.currentUser).subscribe({
      next:(_)=>{
        this.router.navigate(['Home/AdminDashboard'])
      }
    })
  }
}
