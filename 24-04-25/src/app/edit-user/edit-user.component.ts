import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfoNow } from '../userinfo';
import { DatasourceService } from '../datasource.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentUser:UserInfoNow={}
  frm:FormGroup=new FormGroup({
      // userid:new FormControl(''),
      displayname:new FormControl(this.currentUser.name),
      location:new FormControl(this.currentUser.location),
      // email:new FormControl(''),
      password:new FormControl('this.currentUser.password'),
      role:new FormControl('this.currentUser.role'),
    });
 
    constructor(private srv:DatasourceService,private activeRoute:ActivatedRoute,private router:Router){
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        console.log(SelId);
        if(SelId!=null)
        {
          this.srv. GetUserDataById(SelId).subscribe(
            {
              next:(data)=>{
                console.log(data)
                this.currentUser=data;
                this.PrepareForm();
              }
            }
          )
        }

      })
     

    }
    private PrepareForm():void{
      this.frm.controls['displayname'].setValue(this.currentUser.name);
      this.frm.controls['location'].setValue(this.currentUser.location);
      this.frm.controls['role'].setValue(this.currentUser.role);
      this.frm.controls['password'].setValue(this.currentUser.password);
     
    }


  ngOnInit(): void {
    
  }
    EditUser(){
      this.currentUser.name=this.frm.controls['displayname'].value;
      this.currentUser.location=this.frm.controls['location'].value;
      this.currentUser.role=this.frm.controls['role'].value;
      this.currentUser.password=this.frm.controls['password'].value;
      this.srv.EditUser(this.currentUser).subscribe({
        next:(_)=>{
          this.router.navigate(['home/userlist']);
        }
      })
  }
}
