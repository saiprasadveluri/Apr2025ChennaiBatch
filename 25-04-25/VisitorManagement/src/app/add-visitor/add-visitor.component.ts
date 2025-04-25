import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { VisitorInfo } from '../visitor-info';

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

    parentcompany:new FormControl(''),
    purpose:new FormControl(''),
    mobilenumber:new FormControl(''),
    visitingdata:new FormControl(''),
    hostname:new FormControl(''),
    
    


  });
  constructor(private srv:DataSourceService,private router:Router){


  }
  AddNewVisitor(){
    // let userData:UserInfo={
    //   userId:this.frm.controls['userId'].value,
    //   displayName:this.frm.controls['displayName'].value,
    //   email:this.frm.controls['email'].value,
    //   password:this.frm.controls['password'].value,
    //   role:this.frm.controls['role'].value,
      
    let visitorData:VisitorInfo={
      id:this.frm.controls['id'].value,
      name:this.frm.controls['name'].value,
         location:this.frm.controls['location'].value,
         parentcompany:this.frm.controls['parentcompany'].value,
        purpose:this.frm.controls['purpose'].value,
      mobilenumber:this.frm.controls['mobilenumber'].value,
      visitingdata:this.frm.controls['visitingdata'].value,
      hostname:this.frm.controls['hostname'].value,
      

        
    }
    console.log(visitorData);
  this.srv.AddNewVisitorEntry(visitorData).subscribe({
    next:(data)=>{
      this.router.navigate(['home/VisitorList']);
    }
  }
  )
  };
 

  }



