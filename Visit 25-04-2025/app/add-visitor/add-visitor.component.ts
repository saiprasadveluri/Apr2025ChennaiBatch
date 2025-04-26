import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { VisitorInfo } from '../visitor-info';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  frm:FormGroup=new FormGroup({
    name:new FormControl(''),
    location:new FormControl(''),
    parentCompany:new FormControl(''),
    purpose:new FormControl(''),
    mobileNumber:new FormControl(),
    visitingDate:new FormControl(''),
    HostName:new FormControl('')
 });
 constructor(private srv:DataSourceService,private router:Router)
 {
 
 }
 AddVisitor(){
   
   let visitorData:VisitorInfo={
     name:this.frm.controls['name'].value,
     location:this.frm.controls['location'].value,
     parentCompany:this.frm.controls['parentCompany'].value,
     purpose:this.frm.controls['purpose'].value,
     mobileNumber:this.frm.controls['mobileNumber'].value,
     visitingDate:this.frm.controls['visitingDate'].value,
     HostName:this.frm.controls['HostName'].value,
   }
   console.log(visitorData);
   this.srv.AddVisitor(visitorData).subscribe(
     {
       next:(data)=>{
         this.router.navigate(['Home/VisitorList'])
       }
     }
   );
 
  }
}
