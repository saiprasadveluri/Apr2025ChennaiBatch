import { Component, EventEmitter, Output } from '@angular/core';
import { VisitorServicesComponent } from '../visitor.service';
import { Visitor } from '../visitor';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent {
@Output()visitorAdded=new EventEmitter<Visitor>();
visitor:Visitor={
  visitorId: 1,
  name: "",
  location: "",
  parentCompany: "",
  purpose: "",
  phoneNo: "",
  visitingDate: "",
  hostName: "",
  readOnly: false
};
constructor(private visitorService:VisitorServicesComponent){}
addVisitor():void{
  //this.visitor.readOnly=false;
  this.visitor.visitorId=new Date().getTime();
  this.visitorService.addVisitor(this.visitor).subscribe(newVisitor=>{
    alert('Visitor Added Successfully!');
    this.resetForm();
   this.visitorAdded.emit(newVisitor);
  });
}
  resetForm():void {
  this.visitor={
  visitorId:1,
  name:"",
  location:"",
  parentCompany:"",
  purpose:"",
  phoneNo:"",
  visitingDate:"",
  hostName:"",
  readOnly:false
  };
  
  }
}
