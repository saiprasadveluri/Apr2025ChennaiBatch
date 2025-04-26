import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { VisitorInfo } from '../visitor-info';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
frm:FormGroup=new FormGroup({
    name:new FormControl(''),
    employeeNumber:new FormControl(''),
    department:new FormControl(''),
    location:new FormControl(''),
    contactNumber:new FormControl(''),
    
 });
 host:HostInfo[]=[];
 constructor(private srv:DataSourceService,private router:Router)
 {
 
 }
 ngOnInit():void{

 }
 AddHost(){
   
   let host:HostInfo={
     name: this.frm.controls['name'].value,
     employeeNumber: this.frm.controls['employeeNumber'].value,
     department: this.frm.controls['department'].value,
     location: this.frm.controls['location'].value,
     contactNumber: this.frm.controls['contactNumber'].value,
     role:"host"
   }
   console.log(host);
   this.srv.AddHost(host).subscribe(
     {
       next:(data)=>{
         this.router.navigate(['Home/HostList'])
       }
     }
   );
 
  }
}
