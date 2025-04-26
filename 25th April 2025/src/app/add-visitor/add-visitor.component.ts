import { Component } from '@angular/core';
import { visitorInfo } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  visitorData:visitorInfo[]=[];
  vstfrm:FormGroup = new FormGroup({
        id: new FormControl(''),
        visitorName: new FormControl(''),
        visitorCompany: new FormControl(''),
        visitorPurpose: new FormControl(''),
        visitorMobile: new FormControl(''),
        visitorDate: new FormControl(''),
        hostName: new FormControl('') 
  })

  constructor(private srv:DataSourceService, private router:Router)
  {
    
  }

  AddNewVisitor()
  {
    let visitorData:visitorInfo={
      id:this.vstfrm.controls['id'].value,
      visitorName: this.vstfrm.controls['visitorName'].value,
      visitorCompany: this.vstfrm.controls['visitorCompany'].value,
      visitorMobile: this.vstfrm.controls['visitorMobile'].value,
      visitorDate: this.vstfrm.controls['visitorDate'].value,
      hostName: this.vstfrm.controls['hostName'].value,
      visitorPurpose: this.vstfrm.controls['visitorPurpose'].value,
    }

    console.log(visitorData);
    this.srv.AddNewVisitorEntry(visitorData).subscribe(
      {
        next:(data)=>{
          this.router.navigate(['home/visitorList']);
        }
      }
    );
    this.router.navigate(['home/visitorList']);
  } 
}
