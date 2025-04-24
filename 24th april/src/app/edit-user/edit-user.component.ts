import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfoNew } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Data, RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  currentUser:UserInfoNew={}

  

  frm:FormGroup= new FormGroup({
    displayName:new FormControl(this.currentUser.name),
    location:new FormControl(this.currentUser.location),
    password:new FormControl(this.currentUser.password),
    role:new FormControl(this.currentUser.role)
  });

  constructor(private srv:DataSourceService , private activeRoute:ActivatedRoute, private router:Router)
  {
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId = prms.get('id');
      console.log(SelId);
      if(SelId!=null)
      {
        this.srv.GetUserDataById(SelId).subscribe(
          {
            next:(data)=>{
              this.currentUser=data;
              this.PrepareForm();
            }
          }
        )
      }
    });
    // this.srv.GetUserDataById()
  }

  private PrepareForm():void
  {
    this.frm.controls['displayName'].setValue(this.currentUser.name);
    this.frm.controls['location'].setValue(this.currentUser.location);
    this.frm.controls['role'].setValue(this.currentUser.role);
    this.frm.controls['password'].setValue(this.currentUser.password);


  }
  ngOnInit(): void {
    
  }

  
  EditUser()
  {
    this.currentUser.name=this.frm.controls['displayName'].value;
    this.currentUser.location=this.frm.controls['location'].value;
    this.currentUser.password=this.frm.controls['password'].value;
    this.currentUser.role=this.frm.controls['role'].value;
    // this.currentUser.name=this.frm.controls['displayName'].value;
    this.srv.EditUser(this.currentUser).subscribe({
      next:(_)=>{
        this.router.navigate(['home/UserList'])
      }
    })
  }
}
