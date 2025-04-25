import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { VisitorInfoNew } from '../visitor-info';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  frm:FormGroup=new FormGroup({
    
    name:new FormControl(''),
    location: new FormControl(''),
    parentCompany:new FormControl(''),
    purpose:new FormControl(''),
    mobileNumber:new FormControl(''),
    visitingdate:new FormControl(''),
    hostname:new FormControl('')

  });
  constructor(private srv:DataSourceService, private router:Router){

  }

  AddNewVisitor()
  {

    let visitorData:VisitorInfoNew={
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      parentCompany:this.frm.controls['parentCompany'].value,
      purpose:this.frm.controls['purpose'].value,
      mobileNumber:this.frm.controls['mobileNumber'].value,
      visitingdate:this.frm.controls['visitingdate'].value,
      hostname:this.frm.controls['hostname'].value,
    }
    console.log(visitorData);


    console.log(visitorData);
    this.srv.AddNewVisitorEntry(visitorData).subscribe({
      next:(data)=>{
        this.router.navigate(['VisitorList']);
      }
    });
  }

}
