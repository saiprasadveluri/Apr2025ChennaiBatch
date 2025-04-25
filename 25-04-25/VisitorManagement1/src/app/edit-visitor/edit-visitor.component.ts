import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorInfo } from '../visitor-info';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit{
    CurrentVisitor:VisitorInfo={
      id: '',
      name: '',
      location: '',
      parentCompany: '',
      purpose: '',
      mobileNo: '',
      date: '',
      hostname: '',
      
    };
    frm:FormGroup=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(this.CurrentVisitor.name),
      location:new FormControl(this.CurrentVisitor.location),
      parentCompany:new FormControl(this.CurrentVisitor.parentCompany),
      purpose:new FormControl(this.CurrentVisitor.purpose),
      mobileNo:new FormControl(this.CurrentVisitor.mobileNo),
      date:new FormControl(this.CurrentVisitor.date),
      hostname:new FormControl(this.CurrentVisitor.hostname),
    });
    constructor(private dsrv:DataSourceService,private activerouter:ActivatedRoute,private router:Router){ 
      this.activerouter.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        console.log(SelId);
        if(SelId!=null){
          this.dsrv.GetVisitorDataById(SelId).subscribe({
            next:(data)=>{
              console.log(data)
              this.CurrentVisitor=data;
              this.PrepareForm();
            }
          });
        }
      }) 
    }
    private PrepareForm():void{
      this.frm.controls['name'].setValue(this.CurrentVisitor.name);
      this.frm.controls['location'].setValue(this.CurrentVisitor.location);
      this.frm.controls['parentCompany'].setValue(this.CurrentVisitor.parentCompany);
      this.frm.controls['purpose'].setValue(this.CurrentVisitor.purpose);
      this.frm.controls['mobileNo'].setValue(this.CurrentVisitor.mobileNo);
      this.frm.controls['date'].setValue(this.CurrentVisitor.date);
      this.frm.controls['hostname'].setValue(this.CurrentVisitor.hostname);
    }
  ngOnInit(): void {
    
  }
  EditVisitor(){
   this.CurrentVisitor.name=this.frm.controls['name'].value;
   this.CurrentVisitor.location=this.frm.controls['location'].value;
   this.CurrentVisitor.parentCompany=this.frm.controls['parentCompany'].value;
   this.CurrentVisitor.purpose=this.frm.controls['purpose'].value;
   this.CurrentVisitor.mobileNo=this.frm.controls['mobileNo'].value;
   this.CurrentVisitor.date=this.frm.controls['date'].value;
   this.CurrentVisitor.hostname=this.frm.controls['hostname'].value;
   this.dsrv.EditVisitor(this.CurrentVisitor).subscribe({
    next:(_)=>{
      this.router.navigate(['Home/VisitorList'])
    }
   })
  }
}
