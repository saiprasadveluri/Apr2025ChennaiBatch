import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.css']
})
export class AddvisitorComponent {
  frm:FormGroup=new FormGroup({
    Name:new FormControl(''),
    location:new FormControl(''),
    parentcompany:new FormControl(''),
    purpose:new FormControl(''),
    mobilenumber:new FormControl(''),
    visitingdate:new FormControl(''),
    Hostname:new FormControl(''),


  });
  visitorList:VisitorInfo []=[];
  constructor(private dSrv:DatasourceService,private router:Router)
  {

  }
  AddNewVisitor(){
    let visitordata:VisitorInfo ={
      Name: this.frm.controls['Name'].value,
      location: this.frm.controls['location'].value,
      parentcompany: this.frm.controls['parentcompany'].value,
      purpose: this.frm.controls['purpose'].value,
      mobilenumber: this.frm.controls['mobilenumber'].value,
      visitingdate: this.frm.controls['visitingdate'].value,
      Hostname: this.frm.controls['Hostname'].value,

    }
    console.log(visitordata)
    this.dSrv.AddNewvisitor(visitordata).subscribe({
      next:(_)=>{
        this.router.navigate(['home/visitorlist']);
      }
    })
  }
}
