import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { hostInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { concatAll } from 'rxjs';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
  hostData: hostInfo[] = [];
  hstfrm: FormGroup = new FormGroup ({
    id: new FormControl(''),
    hostName: new FormControl(''),
    empNo: new FormControl(''),
    dept: new FormControl(''),
    location: new FormControl(''),
    contactNo: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role :new FormControl('')

  })

  constructor(private srv:DataSourceService, private router:Router)
  {

  }

  AddNewHost()
  {
    let hostData : hostInfo = {
      id:this.hstfrm.controls['id'].value,
      hostName:this.hstfrm.controls['hostName'].value,
      empNo:this.hstfrm.controls['empNo'].value,
      dept:this.hstfrm.controls['dept'].value,
      location:this.hstfrm.controls['location'].value,
      contactNo:this.hstfrm.controls['contactNo'].value,
      email:this.hstfrm.controls['email'].value,
      password:this.hstfrm.controls['password'].value,
      role:this.hstfrm.controls['role'].value

    }

    console.log(hostData);
    this.srv.AddNewHostEntry(hostData).subscribe(
      {
        next:(data)=>{
          this.router.navigate(['home/hostList']);
        }
      }
    );
    this.router.navigate(['home/hostList']);
  }

}
