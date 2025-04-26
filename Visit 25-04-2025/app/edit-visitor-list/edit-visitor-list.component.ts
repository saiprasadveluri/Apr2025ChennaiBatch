import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-edit-visitor-list',
  templateUrl: './edit-visitor-list.component.html',
  styleUrls: ['./edit-visitor-list.component.css']
})
export class EditVisitorListComponent {
  VisitorList:VisitorInfo={}
   frm:FormGroup=new FormGroup({
    //id:new FormControl(this.VisitorList.id),
    name:new FormControl(this.VisitorList.name),
    location:new FormControl(this.VisitorList.location),
    parentCompany:new FormControl(this.VisitorList.parentCompany),
    purpose:new FormControl(this.VisitorList.purpose),
    mobileNumber:new FormControl(this.VisitorList.mobileNumber),
    visitingDate:new FormControl(this.VisitorList.visitingDate),
    HostName:new FormControl(this.VisitorList.HostName),


    
   })
    constructor(private srv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router)
    {
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        console.log(SelId)
        if(SelId!=null)
        {
          this.srv.GetVisitorDataById(SelId).subscribe(
            {
              next:(data)=>{
                console.log(data);
                this.VisitorList=data;
                this.PrepareForm();
              }
            }
          )
        }
      })
    
    }
    private PrepareForm():void{
     // this.frm.controls['id'].setValue(this.VisitorList.id);
      this.frm.controls['name'].setValue(this.VisitorList.name);
      this.frm.controls['location'].setValue(this.VisitorList.location);
      this.frm.controls['parentCompany'].setValue(this.VisitorList.parentCompany);
      this.frm.controls['purpose'].setValue(this.VisitorList.purpose);
      this.frm.controls['mobileNumber'].setValue(this.VisitorList.mobileNumber);
      this.frm.controls['vistingDate'].setValue(this.VisitorList.visitingDate);
      this.frm.controls['HostName'].setValue(this.VisitorList.HostName);

    }
    ngOnInit():void{

    }
    EditVisitor():void
  {
     this.VisitorList.name=this.frm.controls['name'].value;
     this.VisitorList.location=this.frm.controls['location'].value;
     this.VisitorList.parentCompany=this.frm.controls['parentCompany'].value;
     this.VisitorList.parentCompany=this.frm.controls['purpose'].value;
     this.VisitorList.parentCompany=this.frm.controls['mobileNumber'].value;
     this.VisitorList.parentCompany=this.frm.controls['visitingDate'].value;
     this.VisitorList.parentCompany=this.frm.controls['HostName'].value;
    
     this.srv.EditVisitor(this.VisitorList).subscribe({
      next:(_)=>{
        this.router.navigate(['VisitorList']);
      }
     })
  }
}
