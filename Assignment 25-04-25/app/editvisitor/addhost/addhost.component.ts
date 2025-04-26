import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HostInfo } from '../host-info';
import { DatasourceServiceService } from '../datasource-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhost',
  templateUrl: './addhost.component.html',
  styleUrls: ['./addhost.component.css']
})
export class AddhostComponent {
  frm:FormGroup=new FormGroup({
    // Visitorid:new FormGroup(''),
     hname:new FormControl(''),
     EmployeeNumber:new FormControl(''),
     Department:new FormControl(''),
     Location:new FormControl(''),
     ContactNumber:new FormControl(''),
     role:new FormControl('')
    });
    host:HostInfo[]=[];
    constructor(private srv:DatasourceServiceService,private router:Router){
      
    }
    ngOnInit(): void {
      
    }
   
    
    AddNewHost(){
      let host:HostInfo={

        // Visitorid: this.frm.controls['Visitorid'].value,
         hname: this.frm.controls['hname'].value,
         EmployeeNumber: this.frm.controls['EmployeeNumber'].value,
         Department: this.frm.controls['Department'].value,
         Location: this.frm.controls['Location'].value,
         ContactNumber: this.frm.controls['ContactNumber'].value,
         role:this.frm.controls['role'].value,
        
       }
          console.log(host);
          this.srv.AddNewHost(host).subscribe({
            next:(data)=>{
              this.router.navigate(['home/hostlist']);
            }
          })
          
  
         
        }
       
    
        }

