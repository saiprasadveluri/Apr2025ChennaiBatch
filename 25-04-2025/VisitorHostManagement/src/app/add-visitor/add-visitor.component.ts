import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorInfo } from '../visitor-info';
import { VisitorSourceService } from '../visitor-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  frm:FormGroup=new FormGroup({
    vname:new FormControl(''),
    vloc:new FormControl('Chennai'),
    hname:new FormControl(''),
    vdate:new FormControl(''),
  })
  constructor(private srv:VisitorSourceService, private router:Router){

  }
  AddNewVisitor(){
    let VisitorData:VisitorInfo={
      vname: this.frm.controls['vname'].value,
      vloc: this.frm.controls['vloc'].value,
      hname: this.frm.controls['hname'].value,
      vdate: this.frm.controls['vdate'].value,
    }
    console.log(VisitorData);
    this.srv.AddNewVisitorEntry(VisitorData).subscribe(
      {
      next:(data)=>{
        this.router.navigate(['VisitorDashboard'])
      }
    }
    )
  }
}
