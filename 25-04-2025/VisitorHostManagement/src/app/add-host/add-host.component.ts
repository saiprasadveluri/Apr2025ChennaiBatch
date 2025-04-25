import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorSourceService } from '../visitor-source.service';
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
  loc:new FormControl('Chennai'),
  email:new FormControl(''),
  password:new FormControl(''),
  })
  constructor(private srv:VisitorSourceService, private router:Router){

  }
  AddNewHost(){
      let HostData:HostInfo={
        hname:this.frm.controls['hname'].value,
        loc:this.frm.controls['loc'].value,
        email:this.frm.controls['email'].value,
        password:this.frm.controls['password'].value,
        role:"host"
        }
      console.log(HostData);
      this.srv.AddNewHostEntry(HostData).subscribe(
        {
        next:(data)=>{
          this.router.navigate(['Home/ViewHostList'])
        }
      }
      )
    }
}
