import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HostInfo } from '../host-info';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhost',
  templateUrl: './addhost.component.html',
  styleUrls: ['./addhost.component.css']
})
export class AddhostComponent {
frm:FormGroup=new FormGroup({
    Name:new FormControl(''),
    employeenumber:new FormControl(''),
    department:new FormControl(''),
    purpose:new FormControl(''),
    location:new FormControl(''),
    contactnumber:new FormControl(''),
    role:new FormControl('')
   


  });
  hostdata:HostInfo[]=[];
  constructor(private dSrv:DatasourceService,private router:Router)
  {

  }
  AddNewhost(){
    let hostdata:HostInfo ={
      Name: this.frm.controls['Name'].value,
      employeenumber: this.frm.controls['employeenumber'].value,
      department: this.frm.controls['department'].value,
      location: this.frm.controls['location'].value,
      contactnumber: this.frm.controls['contactnumber'].value,
      role: this.frm.controls['role'].value,
    
    }
    console.log(hostdata)
    this.dSrv.AddNewhost(hostdata).subscribe({
      next:(_)=>{
        this.router.navigate(['home/hostlist']);
      }
    })
  }
}


