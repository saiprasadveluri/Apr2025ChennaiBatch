import { Component } from '@angular/core';
import { VisitorInfoNew } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent {
  currentVisitor:VisitorInfoNew={}
  frm:FormGroup=new FormGroup({
      
    name:new FormControl(this.currentVisitor.name),
    location: new FormControl(this.currentVisitor.location),
    parentCompany:new FormControl(this.currentVisitor.parentCompany),
    purpose:new FormControl(this.currentVisitor.purpose),
    mobileNumber:new FormControl(this.currentVisitor.mobileNumber),
    visitingdate:new FormControl(this.currentVisitor.visitingdate),
    hostname:new FormControl(this.currentVisitor.hostname),
    });
  constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute, private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetVisitorDataById(SelId).subscribe({
          next:(data)=>{
            this.currentVisitor=data;
            this.PrepareForm();
          }
        })
      }
    })
  }
  private PrepareForm():void{
    this.frm.controls['name'].setValue(this.currentVisitor.name);
    this.frm.controls['location'].setValue(this.currentVisitor.location);
    this.frm.controls['parentCompany'].setValue(this.currentVisitor.parentCompany);
    this.frm.controls['purpose'].setValue(this.currentVisitor.purpose);
    this.frm.controls['mobileNumber'].setValue(this.currentVisitor.mobileNumber);
    this.frm.controls['visitingdate'].setValue(this.currentVisitor.visitingdate);
    this.frm.controls['hostname'].setValue(this.currentVisitor.hostname);

  }
  ngOnInit(): void {
    
  }
  EditVisitor(){
    this.currentVisitor.name=this.frm.controls['displayName'].value;
    this.currentVisitor.location=this.frm.controls['location'].value;
    this.currentVisitor.parentCompany=this.frm.controls['parentCompany'].value;
    this.currentVisitor.purpose=this.frm.controls['purpose'].value;
    this.currentVisitor.mobileNumber=this.frm.controls['mobileNumber'].value;
    this.currentVisitor.visitingdate=this.frm.controls['visitingdate'].value;
    this.currentVisitor.hostname=this.frm.controls['hostname'].value;

    this.srv.EditVisitor(this.currentVisitor).subscribe({
      next:(_)=>{
        this.router.navigate(['VisitorList'])
      }
    })
  }

}
