import { Component } from '@angular/core';
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
  visitorlist:VisitorInfo={
  }
  frm:FormGroup=new FormGroup({
      // userid:new FormControl(''),
      Name:new FormControl(this.visitorlist.Name),
      location:new FormControl(this.visitorlist.location),
      parentcompany:new FormControl(this.visitorlist.parentcompany),
      purpose:new FormControl(this.visitorlist.purpose),
      mobilenumber:new FormControl(this.visitorlist.mobilenumber),
      visitingdate:new FormControl(this.visitorlist.visitingdate),
      Hostname:new FormControl(this.visitorlist.Hostname),
    });
 
    constructor(private srv:DatasourceService,private activeRoute:ActivatedRoute,private router:Router){
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId=prms.get('id');
        console.log(SelId);
        if(SelId!=null)
        {
          this.srv. GetvisitorDataById(SelId).subscribe(
            {
              next:(data)=>{
                console.log(data)
                this.visitorlist=data;
                this.PrepareForm();
              }
            });
        }

      });
     

    }
    private PrepareForm():void{
      this.frm.controls['Name'].setValue(this.visitorlist.Name);
      this.frm.controls['location'].setValue(this.visitorlist.location);
      this.frm.controls['parentcompany'].setValue(this.visitorlist.parentcompany);
      this.frm.controls['purpose'].setValue(this.visitorlist.purpose);
      this.frm.controls['mobilenumber'].setValue(this.visitorlist.mobilenumber);
      this.frm.controls['visitingdate'].setValue(this.visitorlist.visitingdate);
      this.frm.controls['Hostname'].setValue(this.visitorlist.Hostname);
      }

    editvisitor(){
      this.visitorlist.Name=this.frm.controls['Name'].value;
      this.visitorlist.location=this.frm.controls['location'].value;
      this.visitorlist.parentcompany=this.frm.controls['parentcompany'].value;
      this.visitorlist.purpose=this.frm.controls['purpose'].value;
      this.visitorlist.mobilenumber=this.frm.controls['mobilenumber'].value; 
      this.visitorlist.visitingdate=this.frm.controls['visitingdate'].value;
      this.visitorlist.Hostname=this.frm.controls['Hostname'].value;
      this.srv.editvisitor(this.visitorlist).subscribe({
        next:(_)=>{
          this.router.navigate(['home/visitorlist']);
        }
      })
  }
}

