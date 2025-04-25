import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VDataSourceService } from '../vdata-source.service';
import { Router } from '@angular/router';
import { Hostinfo } from '../vinfo';

@Component({
  selector: 'app-addhost',
  templateUrl: './addhost.component.html',
  styleUrls: ['./addhost.component.css']
})
export class AddhostComponent {
  frm:FormGroup=new FormGroup({
    // userId:new FormControl(''),
    // id:new FormControl(''),
    hostname:new FormControl(''),
    empNum:new FormControl(''),
    dept:new FormControl(''),
    location:new FormControl('HYD'),
    email:new FormControl(''),
    password: new FormControl(''),
    mobileno:new FormControl(''),
    role: new FormControl(''),
  });
  constructor(private srv:VDataSourceService,private router:Router){

  }
  AddNewHost(){
    let hostData:Hostinfo={
       hostname:this.frm.controls['hostname'].value,
       empNum:this.frm.controls['empNum'].value,
       dept:this.frm.controls['dept'].value,
       location:this.frm.controls['location'].value,
       email:this.frm.controls['email'].value,
       mobileno:this.frm.controls['mobileno'].value,
       password:this.frm.controls['password'].value,
       role:this.frm.controls['role'].value,
    };
  console.log(hostData);
  this.srv.AddNewHostEntry(hostData).subscribe({
    next:(data)=>{
      this.router.navigate(['home/hostlist'])
    }
  });
  }
}
