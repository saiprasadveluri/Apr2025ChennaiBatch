import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hostinfo } from '../hostinfo';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhost',
  templateUrl: './addhost.component.html',
  styleUrls: ['./addhost.component.css']
})
export class AddhostComponent {

  frm:FormGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    location:new FormControl(''),
    Employeenumber:new FormControl(''),
    contactnumber:new FormControl(''),
    Department:new FormControl(''),
  });
  Hostdata:Hostinfo[]=[];
  constructor(private srv: DatasourceService,private router:Router) 
  {
    
  }
  
  AddNewHost()
  {
        let Hostdata:Hostinfo={
          id:this.frm.controls['id'].value,
          name:this.frm.controls['name'].value,
          location:this.frm.controls['location'].value,
          Employeenumber:this.frm.controls[' Employeenumber'].value,
          contactnumber:this.frm.controls[' contactnumber'].value,
          Department:this.frm.controls[' Department'].value,
        
        }
     console.log(Hostdata) ;
     this.srv.AddNewvisitor(Hostdata).subscribe({
      next:(data)=>
      {
        this.router.navigate(['hostlist'])
      }
    })
  }
  }
  

