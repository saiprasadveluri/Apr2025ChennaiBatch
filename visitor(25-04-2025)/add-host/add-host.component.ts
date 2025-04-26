import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorSourceService } from '../visitor-source.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
frm:FormGroup=new FormGroup({
  hname:new FormControl(''),
  hloc:new FormControl(''),
  hemail:new FormControl(''),
  hpass:new FormControl('')
  })
  constructor(private srv:VisitorSourceService,private http:HttpClient,private router:Router)
  {

  }
  AddHost()
  {
    let hostData:HostInfo={
      hname:this.frm.controls['hname'].value,
      hloc:this.frm.controls['hloc'].value,
      hemail:this.frm.controls['memail'].value,
      hpass:this.frm.controls['mpass'].value,
      role:"Host"
    }
    console.log(hostData)
    this.srv.AddNewHost(hostData).subscribe({
      next:(data)=>{
        this.router.navigate(['Home/HostList'])
      }
    })
  }

}
