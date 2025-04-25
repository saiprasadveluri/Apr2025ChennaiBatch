import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
  hostData:HostInfo[]=[];
  frm:FormGroup=new FormGroup({
  
  hname:new FormControl(''),
  employeeNo:new FormControl(''),
  dept:new FormControl('') ,
  CNo: new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
  role:new FormControl('')
  });
  constructor(private srv:DataSourceService,private router:Router){}
  AddNewHost(){
    let hostData:HostInfo={
     
      hname:this.frm.controls['hname'].value,
      employeeNo:this.frm.controls['employeeNo'].value,
      dept:this.frm.controls['dept'].value,
      CNo:this.frm.controls['CNo'].value,
      email:this.frm.controls['email'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value,
    }
    console.log(hostData);
    this.srv.AddNewHostEntry(hostData).subscribe({next:(data)=>{
      this.router.navigate(['Home/HostList'])
    }}
  )
  };

}
