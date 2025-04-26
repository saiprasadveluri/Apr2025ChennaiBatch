import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorInfo } from '../visitor-info';
import { DatasourceServiceService } from '../datasource-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit{
  frm:FormGroup=new FormGroup({
  // Visitorid:new FormGroup(''),
   Name:new FormControl(''),
   Location:new FormControl(''),
   ParentCompany:new FormControl(''),
   Purpose:new FormControl(''),
   MobileNumber:new FormControl(''),
   VisitingDate:new FormControl(''),
   Hostname:new FormControl(''),
  });
  visitorlist:VisitorInfo[]=[];
  constructor(private srv:DatasourceServiceService,private router:Router){
    
  }
  ngOnInit(): void {
    
  }
 
  
  AddNewVisitor(){
     let visitordata:VisitorInfo ={
      // Visitorid: this.frm.controls['Visitorid'].value,
      Name: this.frm.controls['Name'].value,
      Location: this.frm.controls['Location'].value,
      ParentCompany: this.frm.controls['ParentCompany'].value,
      Purpose: this.frm.controls['Purpose'].value,
      MobileNumber: this.frm.controls['MobileNumber'].value,
      VisitingDate: this.frm.controls['VisitingDate'].value,
      hname: this.frm.controls['hname'].value,

      
     }
        console.log(visitordata);
        this.srv.AddNewVisitor(visitordata).subscribe({
          next:(data)=>{
            this.router.navigate(['home/visitorlist']);
          }
        })
        

       
      }
     
  
      }
    


