import { Component } from '@angular/core';
import { HostInfo } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.css']
})
export class EditHostComponent {
  currentHost:HostInfo={}
  frm:FormGroup=new FormGroup({
    hostName:new FormControl(this.currentHost.hostName),
    employeeNumber:new FormControl(this.currentHost.employeeNumber),
    department:new FormControl(this.currentHost.department),
    location:new FormControl(this.currentHost.location),
    mobileNo:new FormControl(this.currentHost.mobileNo),
    userId:new FormControl(this.currentHost.userId),
    password:new FormControl(this.currentHost.password),
    
  });
  constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute, private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetHostDataById(SelId).subscribe({
          next:(data)=>{
            this.currentHost=data;
            this.PrepareForm();
          }
        })
      }
    })
  }
  private PrepareForm():void{
    this.frm.controls['hostName'].setValue(this.currentHost.hostName);
    this.frm.controls['employeeNumber'].setValue(this.currentHost.employeeNumber);
    this.frm.controls['department'].setValue(this.currentHost.department);
    this.frm.controls['location'].setValue(this.currentHost.location);
    this.frm.controls['mobileNo'].setValue(this.currentHost.mobileNo);
    this.frm.controls['userId'].setValue(this.currentHost.userId);
    this.frm.controls['password'].setValue(this.currentHost.password);
  }
  EditHost(){
    this.currentHost.hostName=this.frm.controls['hostName'].value;
    this.currentHost.employeeNumber=this.frm.controls['employeeNumber'].value;
    this.currentHost.department=this.frm.controls['department'].value;
    this.currentHost.location=this.frm.controls['location'].value;
    this.currentHost.mobileNo=this.frm.controls['mobileNo'].value;
    this.currentHost.userId=this.frm.controls['userId'].value;
    this.currentHost.password=this.frm.controls['password'].value;
    this.srv.EditHost(this.currentHost).subscribe({
      next:(_)=>{
        this.router.navigate(['home/ManagerDashboard']);
      }
    })
  }
}
