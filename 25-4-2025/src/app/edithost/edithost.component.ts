import { Component } from '@angular/core';
import { VDataSourceService } from '../vdata-source.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Hostinfo } from '../vinfo';

@Component({
  selector: 'app-edithost',
  templateUrl: './edithost.component.html',
  styleUrls: ['./edithost.component.css']
})
export class EdithostComponent {
  currentHost:Hostinfo={
  }
   frm:FormGroup=new FormGroup({
      // userId:new FormControl(''),
      // id:new FormControl(''),
      name:new FormControl(this.currentHost.hostname),
      empNum:new FormControl(this.currentHost.empNum),
      dept:new FormControl(this.currentHost.dept),
      location:new FormControl(this.currentHost.location),
      mobileno:new FormControl(this.currentHost.mobileno),
      email:new FormControl(this.currentHost.email),
      password: new FormControl(this.currentHost.password),
      role:new FormControl(this.currentHost.role),
    });
   EditHost()
   {
    this.currentHost.hostname=this.frm.controls['name'].value;
    this.currentHost.empNum=this.frm.controls['empNum'].value;
    this.currentHost.dept=this.frm.controls['dept'].value;
    this.currentHost.location=this.frm.controls['location'].value;
    this.currentHost.mobileno=this.frm.controls['mobileno'].value;
    this.currentHost.email=this.frm.controls['email'].value;
    this.currentHost.password=this.frm.controls['password'].value;
    this.currentHost.role=this.frm.controls['role'].value;
    this.srv.EditHost(this.currentHost).subscribe(
      {
        next:(_)=>{
          this.router.navigate(['home/hostlist'])
        }
      }
    )
    
   }
   constructor(private srv:VDataSourceService, private activeRoute:ActivatedRoute,private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetHostDataById(SelId).subscribe(
          {
            next:(data)=>{
              this.currentHost=data;
              this.PrepareForm();
            }
          }
        )
      }
    }) 
   }
   private PrepareForm(): void 
   {
    this.frm.controls['name'].setValue(this.currentHost.hostname);
    this.frm.controls['empNum'].setValue(this.currentHost.empNum);
    this.frm.controls['dept'].setValue(this.currentHost.dept);
    this.frm.controls['location'].setValue(this.currentHost.location);
    this.frm.controls['mobileno'].setValue(this.currentHost.mobileno);
    this.frm.controls['email'].setValue(this.currentHost.email);
    this.frm.controls['password'].setValue(this.currentHost.password);
    this.frm.controls['role'].setValue(this.currentHost.role);
   }


   ngOnInit(): void {
     
   }
}
