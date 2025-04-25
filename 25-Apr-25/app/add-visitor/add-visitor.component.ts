import { Component } from '@angular/core';
 import { FormControl, FormGroup } from '@angular/forms';
 import { DataSourceService } from '../data-source.service';
 import { Router } from '@angular/router';
 import { VisitorInfo } from '../visitor-info';
 
 @Component({
   selector: 'app-add-visitor',
   templateUrl: './add-visitor.component.html',
   styleUrls: ['./add-visitor.component.css']
 })
 export class AddVisitorComponent {
   frm:FormGroup = new FormGroup({
     name:new FormControl(''),
     parentCompany:new FormControl(''),
     location:new FormControl('HYD'),
     purpose:new FormControl('Intern'),
     mobileNo:new FormControl(''),
     visitingDate:new FormControl(''),
     hostName:new FormControl('reddy'),
   });
   constructor(private srv:DataSourceService,private router:Router){
 
   }
   AddNewVisitor(){
       let visitorData:VisitorInfo={
         name:this.frm.controls['name'].value,
         parentCompany:this.frm.controls['parentCompany'].value,
         location:this.frm.controls['location'].value,
         purpose:this.frm.controls['purpose'].value,
         mobileNo:this.frm.controls['mobileNo'].value,
         visitingDate:this.frm.controls['visitingDate'].value,
         hostName:this.frm.controls['hostName'].value,
       }
       console.log(visitorData);
       this.srv.AddNewVisitorEntry(visitorData).subscribe({
         next:(data)=>{
           this.router.navigate(['home/ManagerDashboard']);
         }
       });
     }
 }