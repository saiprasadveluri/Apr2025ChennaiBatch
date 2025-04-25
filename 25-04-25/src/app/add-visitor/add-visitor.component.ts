import { Component } from '@angular/core';
import { VisitorInfo,  } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-visitor-user',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
  visitorData:VisitorInfo={};
  frm:FormGroup =new FormGroup({
  name:new FormControl(""),
    location:new FormControl("Che"),
    parrentCompany:new FormControl(""),
    purpose:new FormControl(""),
    number:new FormControl(""),
    host:new FormControl(""),
  });
  constructor(private srv:DataSourceService,private router:Router)
  {

  }
  AddNewUser(){
    // let userData:UserInfo={
    //   userId:this.frm.controls['userId'].value,
    //   displayName:this.frm.controls['displayName'].value,
    //   email:this.frm.controls['email'].value,
    //   password:this.frm.controls['password'].value,
    //   role:this.frm.controls['role'].value
    // }
    let userData:VisitorInfo={
      id:this.frm.controls['userId'].value,
      name:this.frm.controls['name'].value,

      Location:this.frm.controls['Location'].value,
      parentCompany:this.frm.controls['parentCompany'].value,
      purpose:this.frm.controls['purpose'].value,
      number:this.frm.controls['number'].value,
      hostName:this.frm.controls['host'].value,
     
    }
    console.log(this.visitorData);
    this.srv.AddVisitorEntry(this.visitorData).subscribe(
      {
        next:()=>{
          this.router.navigate(["visitorList"]);
        }
      }
    );
  }

}