import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfoNew } from '../user-info';
import { DataSourceService } from '../datasource.service';
import { ActivatedRoute,Router } from '@angular/router';
 
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EditUserComponent  implements OnInit {
 
 
  currentUser:UserInfoNew={}
   frm:FormGroup=new FormGroup({
      displayName:new FormControl('this.currentUser.name'),
      location:new FormControl('this.currentUser.location'),
      //email:new FormControl('this.currentUser.email'),
      password:new FormControl('this.currentUser.password'),
      role:new FormControl('this.currentUser.role')
     });
 
 
     constructor(private srv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router)
     {
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        console.log(SelId);
        if(SelId!=null)
        {
          this.srv.GetUserDataById(SelId).subscribe(
          {
            next:(data)=>{
              console.log(data)
              this.currentUser = data;
              this.PrepareForm();
            }
          });
 
        }
      })
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
    this.currentUser.role=this.frm.controls['role'].value;
    this.currentUser.password=this.frm.controls['password'].value;
    this.srv.EditUser(this.currentUser).subscribe({
    next:(_)=>{
      this.router.navigate(['UserList']);
    }
    });
 
  }
 
}
 