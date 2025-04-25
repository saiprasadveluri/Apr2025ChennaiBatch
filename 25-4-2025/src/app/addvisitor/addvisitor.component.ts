import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VDataSourceService } from '../vdata-source.service';
import { Router } from '@angular/router';
import { Visitorinfo } from '../vinfo';

@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.css']
})
export class AddvisitorComponent {
  frm1:FormGroup=new FormGroup({
    // id:new FormControl(''),
    vname:new FormControl(''),
    parentcomp:new FormControl(''),
    purpose:new FormControl(''),
    location:new FormControl(''),
    mobileno:new FormControl(''),
    visitdate:new FormControl(''),
    hostname:new FormControl('')
  });
  constructor(private vsrv:VDataSourceService,private router:Router){

  }
 AddNewVisitor(){
    let visitorData:Visitorinfo={
      // id:this.frm1.controls['id'].value,
      vname:this.frm1.controls['vname'].value,
      parentcomp:this.frm1.controls['parentcomp'].value,
      purpose:this.frm1.controls['purpose'].value,
      location:this.frm1.controls['location'].value,
      mobileno:this.frm1.controls['mobileno'].value,
      visitdate:this.frm1.controls['visitdate'].value,
      hostname:this.frm1.controls['hostname'].value
    };
    console.log(visitorData);
    this.vsrv.AddNewVisitorEntry(visitorData).subscribe({
      next:(data)=>{
        this.router.navigate(['home'])
      }
    });
  }
}
