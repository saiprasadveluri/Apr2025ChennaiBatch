import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorInfo } from '../visitor-info';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  currentVisitor:VisitorInfo={
    id: '',
    name: '',
    location: '',
    parentcompany: '',
    purpose: '',
    mobilenumber: '',
    visitingdata: '',
    hostname: ''
  }
    frm:FormGroup=new FormGroup({
       
        name:new FormControl(this.currentVisitor.name),
        location:new FormControl(this.currentVisitor.location),
        parentcompany:new FormControl(this.currentVisitor.parentcompany),
        purpose:new FormControl(this.currentVisitor.purpose),
        mobilenumber:new FormControl(this.currentVisitor.mobilenumber),
        visitingdata:new FormControl(this.currentVisitor.visitingdata),
        hostname:new FormControl(this.currentVisitor.hostname),
        
        

  }
);
constructor(private srv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router){
  this.activeRoute.paramMap.subscribe((prms)=>{
    let SelId=prms.get('id');
    console.log(SelId);

    if(SelId!=null){
      this.srv.GetUserDataById(SelId).subscribe({
        next:(data)=>{
          console.log(data)
          this.currentVisitor=data;
          this.PrepareForms();
        }
      })
    }
})
  
}
private PrepareForms():void{
  this.frm.controls['name'].setValue(this.currentVisitor.name);
  this.frm.controls['location'].setValue(this.currentVisitor.location);
  this.frm.controls['parentcompany'].setValue(this.currentVisitor.parentcompany);
  this.frm.controls['purpose'].setValue(this.currentVisitor.purpose);
  this.frm.controls['mobilenumber'].setValue(this.currentVisitor.mobilenumber);
  this.frm.controls['visitingdata'].setValue(this.currentVisitor.visitingdata);
  this.frm.controls['hostname'].setValue(this.currentVisitor.hostname);
}
 

EditVisitor(){
  this.currentVisitor.name=this.frm.controls['name'].value;
  this.currentVisitor.location=this.frm.controls['location'].value;
  this.currentVisitor.parentcompany=this.frm.controls['parentcompany'].value;
  this.currentVisitor.purpose=this.frm.controls['purpose'].value;
  this.currentVisitor.mobilenumber=this.frm.controls['mobilenumber'].value;
  this.currentVisitor.visitingdata=this.frm.controls['visitingdata'].value;
  this.currentVisitor.hostname=this.frm.controls['hostname'].value;

  this.srv.EditVisitor(this.currentVisitor).subscribe({
    next:(_)=>{
      this.router.navigate(['VisitorList']);
    }
  })
  

}


}



