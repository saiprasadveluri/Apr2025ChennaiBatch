import { Component } from '@angular/core';
import { VisitInfo } from '../visit-info';
import { VisitorSourceService } from '../visitor-source.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent {
  editVisitData:VisitInfo={}
  frm:FormGroup=new FormGroup({
    vname:new FormControl(''),
    vdate:new FormControl(''),
    vloc:new FormControl(''),
    hostname:new FormControl('')
  })
  constructor(private srv:VisitorSourceService, private activeRoute:ActivatedRoute,private router:Router)
  {
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id')
      if(SelId!=null)
      {
        this.srv.GetVisitById(SelId).subscribe({
          next:(data)=>{
            this.editVisitData=data
            this.PrepareForm()
          }
        })
      }
    })
  }
  private PrepareForm():void
  {
    this.frm.controls['vname'].setValue(this.editVisitData.vname),
    this.frm.controls['vdate'].setValue(this.editVisitData.vdate),
    this.frm.controls['vloc'].setValue(this.editVisitData.vloc),
    this.frm.controls['hostname'].setValue(this.editVisitData.hostname)
  }  
  EditVisit()
  {
    this.editVisitData.vname=this.frm.controls['vname'].value,
    this.editVisitData.vdate=this.frm.controls['vdate'].value,
    this.editVisitData.vloc=this.frm.controls['vloc'].value,
    this.editVisitData.hostname=this.frm.controls['hostname'].value
    this.srv.GetVisitById(this.editVisitData).subscribe({
      next:(_)=>{
        this.router.navigate(['VisitList'])
      }
    })
  }
}
