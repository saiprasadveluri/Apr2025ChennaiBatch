import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.css']
})
export class EditHostComponent {
  currentHost:HostInfo={
    mobilenumber: undefined,
    userId: undefined,
    password: undefined,
    hostName: function (hostName: any): unknown {
      throw new Error('Function not implemented.');
    },
    employeeNumber: function (employeeNumber: any): unknown {
      throw new Error('Function not implemented.');
    },
    mobileNo: function (mobileNo: any): unknown {
      throw new Error('Function not implemented.');
    }
  }
  frm:FormGroup=new FormGroup({
    Name:new FormControl(this.currentHost.name),
    employeeNumber:new FormControl(this.currentHost.employeenumber),
    department:new FormControl(this.currentHost.department),
    location:new FormControl(this.currentHost.location),
    mobileNumber:new FormControl(this.currentHost.mobilenumber),
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
    this.srv['EditHost'](this.currentHost).subscribe({
      next:(_)=>{
        this.router.navigate(['home/ManagerDashboard']);
      }
    })
  }
}


