import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HostInfo } from '../host-info';
import { Router } from '@angular/router';
import {DataSourceService} from '../data-source.service';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
  hostData:HostInfo={
    Id: '',
    name: '',
    employeenumber:0,
    department: '',
    location: '',
    contactnumber: ''
  };
  frm:FormGroup =new FormGroup({
    hostName:new FormControl(""),
    emplyeeNumber:new FormControl(""),
    department:new FormControl(""),
    location:new FormControl(""),
    contactNumber:new FormControl("")
  });
  constructor(private srv:DataSourceService,private router:Router)
    {
  
    }
    AddNewHost(){

      let hostData:HostInfo={
        Id: this.frm.controls['Id'].value,
        name: this.frm.controls['name'].value,
        employeenumber: this.frm.controls['employeenumber'].value,
        department: this.frm.controls['department'].value,
        location: this.frm.controls['location'].value,
        contactnumber: '',
      }
      console.log(hostData);
    this.srv['AddHostEntry'](hostData).subscribe(
      {
        next:()=>{
          this.router.navigate(["hostList"]);
        }
      }
    );

}
}