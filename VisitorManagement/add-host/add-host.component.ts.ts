import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HostInfo } from '../visitor-info';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
  frm:FormGroup=new FormGroup({
    hostName:new FormControl(''),
    employeeNumber:new FormControl(''),
    department:new FormControl('CIO'),
    location:new FormControl('HYD'),
    mobileNo:new FormControl(''),
    userId:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl('host')
  });
  constructor(private srv:DataSourceService, private router:Router){

  }
  AddNewHost(){
    let hostData:HostInfo={
      hostName:this.frm.controls['hostName'].value,
      employeeNumber:this.frm.controls['employeeNumber'].value,
      department:this.frm.controls['department'].value,
      location:this.frm.controls['location'].value,
      mobileNo:this.frm.controls['mobileNo'].value,
      userId:this.frm.controls['userId'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value,
    }
    console.log(hostData);
    this.srv.AddNewHostEntry(hostData).subscribe({
      next:(data)=>{
        this.router.navigate(['home/ManagerDashboard']);
      }
    });
  }

}
