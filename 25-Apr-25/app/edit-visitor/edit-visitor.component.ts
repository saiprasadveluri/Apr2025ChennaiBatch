import { Component } from '@angular/core';
 import { VisitorInfo } from '../visitor-info';
 import { FormControl, FormGroup } from '@angular/forms';
 import { DataSourceService } from '../data-source.service';
 import { ActivatedRoute, Route, Router } from '@angular/router';
 
 @Component({
   selector: 'app-edit-visitor',
   templateUrl: './edit-visitor.component.html',
   styleUrls: ['./edit-visitor.component.css']
 })
 export class EditVisitorComponent {
   currentVisitor:VisitorInfo={}
     frm:FormGroup=new FormGroup({
       name:new FormControl(this.currentVisitor.name),
       parentCompany:new FormControl(this.currentVisitor.parentCompany),
       location:new FormControl(this.currentVisitor.location),
       purpose:new FormControl(this.currentVisitor.purpose),
       mobileNo:new FormControl(this.currentVisitor.mobileNo),
       visitingDate:new FormControl(this.currentVisitor.visitingDate),
       hostName:new FormControl(this.currentVisitor.hostName),
       
       
     });
     constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute, private router:Router){
       this.activeRoute.paramMap.subscribe((prms)=>{
         let SelId=prms.get('id');
         if(SelId!=null){
           this.srv.GetVisitorById(SelId).subscribe({
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
       this.frm.controls['parentCompany'].setValue(this.currentVisitor.parentCompany);
       this.frm.controls['location'].setValue(this.currentVisitor.location);
       this.frm.controls['purpose'].setValue(this.currentVisitor.purpose);
       this.frm.controls['mobileNo'].setValue(this.currentVisitor.mobileNo);
       this.frm.controls['visitingDate'].setValue(this.currentVisitor.visitingDate);
       this.frm.controls['hostName'].setValue(this.currentVisitor.hostName);
     }
     EditVisitor(){
       this.currentVisitor.hostName=this.frm.controls['hostName'].value;
       this.currentVisitor.parentCompany=this.frm.controls['parentCompany'].value;
       this.currentVisitor.location=this.frm.controls['location'].value;
       this.currentVisitor.purpose=this.frm.controls['purpose'].value;
       this.currentVisitor.mobileNo=this.frm.controls['mobileNo'].value;
       this.currentVisitor.visitingDate=this.frm.controls['visitingDate'].value;
       this.currentVisitor.hostName=this.frm.controls['hostName'].value;
       this.srv.EditVisitor(this.currentVisitor).subscribe({
         next:(_)=>{
           this.router.navigate(['home/ManagerDashboard']);
         }
       })
     }
 }