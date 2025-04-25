import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HostInfo } from '../host-info';
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
    id:new FormControl(''),
    name:new FormControl(''),
    employeenumber:new FormControl(''),

    department:new FormControl(''),
    location:new FormControl(''),
    contactnumber:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl(''),
    
    


  });
  constructor(private srv:DataSourceService,private router:Router){


  }
  AddNewHost(){
    // let userData:UserInfo={
    //   userId:this.frm.controls['userId'].value,
    //   displayName:this.frm.controls['displayName'].value,
    //   email:this.frm.controls['email'].value,
    //   password:this.frm.controls['password'].value,
    //   role:this.frm.controls['role'].value,
      
    let hostData:HostInfo={
      id:this.frm.controls['id'].value,
      name:this.frm.controls['name'].value,
         employeenumber:this.frm.controls['employeenumber'].value,
         department:this.frm.controls['department'].value,
        location:this.frm.controls['location'].value,
      contactnumber:this.frm.controls['contactnumber'].value,
      email:this.frm.controls['email'].value,
      password:this.frm.controls['password'].value,
      role:this.frm.controls['role'].value,
      

        
    }
    console.log(hostData);
  this.srv.AddNewHostEntry(hostData).subscribe({
    next:(data)=>{
      this.router.navigate(['home/HostList']);
    }
  }
  )
  };
 

}
