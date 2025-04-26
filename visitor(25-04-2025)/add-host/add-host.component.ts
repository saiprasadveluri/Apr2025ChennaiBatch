import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
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
    hpswd:new FormControl('')
})
constructor(private srv:DataSourceService,private router:Router)
{

}
AddHost()
{
  let hostData:HostInfo={
    hname: this.frm.controls['hname'].value,
    hloc: this.frm.controls['hloc'].value,
    hemail: this.frm.controls['hemail'].value,
    hpswd: this.frm.controls['hpswd'].value,
    role: "Host"
  }
  console.log(hostData)
  this.srv.AddHostEntry(hostData).subscribe(
  {
    next:(data)=>{
      this.router.navigate(['Home/HostList'])
    }
  }
)
}
GotoHostList()
{
  this.router.navigate(['Home/HostList'])
}
}
