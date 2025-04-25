import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  visitorData:VisitorInfo[]=[];
  frm:FormGroup=new FormGroup({
  id:new FormControl(''),
  name:new FormControl(''),
  location:new FormControl(''),
  parentCompany:new FormControl('') ,
  purpose: new FormControl(''),
  mobileNo:new FormControl(''),
  date:new FormControl(''),
  hostname:new FormControl('')
  });
  constructor(private srv:DataSourceService,private router:Router){}
  AddNewVisitor(){
    let visitorData:VisitorInfo={
      id:this.frm.controls['id'].value,
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      parentCompany:this.frm.controls['parentCompany'].value,
      purpose:this.frm.controls['purpose'].value,
      mobileNo:this.frm.controls['mobileNo'].value,
      date:this.frm.controls['date'].value,
      hostname:this.frm.controls['hostname'].value,
    }
    console.log(visitorData);
    this.srv.AddNewVisitorEntry(visitorData).subscribe({next:(data)=>{
      this.router.navigate(['Home/VisitorList'])
    }}
  )
  };
 
}

