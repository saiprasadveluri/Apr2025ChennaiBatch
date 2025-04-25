import { Component, OnInit } from '@angular/core';
import { VDataSourceService } from '../vdata-source.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Visitorinfo } from '../vinfo';

@Component({
  selector: 'app-editvisitor',
  templateUrl: './editvisitor.component.html',
  styleUrls: ['./editvisitor.component.css']
})
export class EditvisitorComponent implements OnInit {
  currentVisitor:Visitorinfo={
  }
   frm:FormGroup=new FormGroup({
      // userId:new FormControl(''),
      // id:new FormControl(''),
      name:new FormControl(this.currentVisitor.vname),
      location:new FormControl(this.currentVisitor.location),
      pcomp:new FormControl(this.currentVisitor.parentcomp),
      purpose:new FormControl(this.currentVisitor.purpose),
      mobileno:new FormControl(this.currentVisitor.mobileno),
      visitdate:new FormControl(this.currentVisitor.visitdate),
      hostname:new FormControl(this.currentVisitor.hostname), 
      
      
    });
   EditVisitor()
   {
    this.currentVisitor.vname=this.frm.controls['name'].value;
    this.currentVisitor.location=this.frm.controls['location'].value;
    this.currentVisitor.parentcomp=this.frm.controls['pcomp'].value;
    this.currentVisitor.purpose=this.frm.controls['purpose'].value;
    this.currentVisitor.mobileno=this.frm.controls['mobileno'].value;
    this.currentVisitor.visitdate=this.frm.controls['visitdate'].value;
    this.currentVisitor.hostname=this.frm.controls['hostname'].value;
    this.srv.EditVisitor(this.currentVisitor).subscribe(
      {
        next:(_)=>{
          this.router.navigate(['home/visitorlist'])
        }
      }
    )
    
   }
   constructor(private srv:VDataSourceService, private activeRoute:ActivatedRoute,private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetVisitorDataById(SelId).subscribe(
          {
            next:(data)=>{
              this.currentVisitor=data;
              this.PrepareForm1();
            }
          }
        )
      }
    }) 
   }
   private PrepareForm1(): void 
   {
    this.frm.controls['name'].setValue(this.currentVisitor.vname);
    this.frm.controls['location'].setValue(this.currentVisitor.location);
    this.frm.controls['pcomp'].setValue(this.currentVisitor.parentcomp);
    this.frm.controls['purpose'].setValue(this.currentVisitor.purpose);
    this.frm.controls['mobileno'].setValue(this.currentVisitor.mobileno);
    this.frm.controls['visitdate'].setValue(this.currentVisitor.visitdate);
    this.frm.controls['hostname'].setValue(this.currentVisitor.hostname);
   }


   ngOnInit(): void {
    
   }
}
