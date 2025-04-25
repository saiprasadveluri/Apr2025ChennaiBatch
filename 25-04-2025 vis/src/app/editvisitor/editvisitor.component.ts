import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editvisitor',
  templateUrl: './editvisitor.component.html',
  styleUrls: ['./editvisitor.component.css']
})
export class EditvisitorComponent {
  currentUser:VisitorInfo={}
  frm:FormGroup=new FormGroup({
    Name:new FormControl(this.currentUser.Name),
    location:new FormControl(this.currentUser.location),
    MobileNumber:new FormControl(this.currentUser.MobileNumber),
    Parentcompany:new FormControl(this.currentUser.Parentcompany),
    Purpose:new FormControl(this.currentUser.Purpose),
    VistingDate:new FormControl(this.currentUser.VistingDate),
    HostName:new FormControl(this.currentUser.HostName),
    
    });
 
    constructor(private srv:DatasourceService,private activeRoute:ActivatedRoute,private router:Router){
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        if(SelId!=null)
        {
          this.srv. GetVisitorDataById(SelId).subscribe(
            {
              next:(data)=>{
                console.log(data)
                this.currentUser=data;
                this.PrepareForm1();
              }
            }
          )
        }

      });
    }
    private PrepareForm1():void{
      this.frm.controls['Name'].setValue(this.currentUser.Name);
      this.frm.controls['location'].setValue(this.currentUser.location);
      this.frm.controls['Parentcompany'].setValue(this.currentUser.Parentcompany);
      this.frm.controls['Purpose'].setValue(this.currentUser.Purpose);
      this.frm.controls['MobileNumber'].setValue(this.currentUser.MobileNumber);
      this.frm.controls['VistingDate'].setValue(this.currentUser.VistingDate);
      this.frm.controls['HostName'].setValue(this.currentUser.HostName);
     
    }
    EditVisitor(){
      this.currentUser.Name=this.frm.controls['Name'].value;
      this.currentUser.location=this.frm.controls['location'].value;
      this.currentUser.Parentcompany=this.frm.controls['Parentcompany'].value;
      this.currentUser.Purpose=this.frm.controls['Purpose'].value;
      this.currentUser.MobileNumber=this.frm.controls['MobileNumber'].value;
      this.currentUser.VistingDate=this.frm.controls['VistingDate'].value;
      this.currentUser.HostName=this.frm.controls['HostName'].value;
      this.srv.EditVisitor(this.currentUser).subscribe({
        next:(data)=>{
          this.router.navigate(['visitoe-lis']);
        }
      })
  }
}


