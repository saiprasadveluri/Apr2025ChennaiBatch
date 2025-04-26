import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitInfo } from '../visit-info';
import { VisitorSourceService } from '../visitor-source.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  frm:FormGroup=new FormGroup({
    vname:new FormControl(''),
    vdate:new FormControl(''),
    vloc:new FormControl(''),
    hostname:new FormControl('')
  })
  constructor(private srv:VisitorSourceService,private http:HttpClient,private router:Router)
  {

  }
  AddVisitor()
  {
    let visitData:VisitInfo={
      vname:this.frm.controls['vname'].value,
      vdate:this.frm.controls['vdate'].value,
      vloc:this.frm.controls['vloc'].value,
      hostname:this.frm.controls['hostname'].value
    }
    console.log(visitData)
    this.srv.AddNewVisitor(visitData).subscribe({
      next:(data)=>{
        this.router.navigate(['VisitList'])
      }
    })
  }
}
