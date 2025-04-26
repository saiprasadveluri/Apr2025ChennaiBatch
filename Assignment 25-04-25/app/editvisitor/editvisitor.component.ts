import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceServiceService } from '../datasource-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editvisitor',
  templateUrl: './editvisitor.component.html',
  styleUrls: ['./editvisitor.component.css']
})
export class EditvisitorComponent {
   visitorlist:VisitorInfo ={

   }

  frm: FormGroup = new FormGroup({
    id: new FormControl(this.visitorlist.id),
    Name: new FormControl(this.visitorlist.Name),
    Location: new FormControl(this.visitorlist.Location),
    ParentCompany: new FormControl(this.visitorlist.ParentCompany),
    Purpose: new FormControl(this.visitorlist.Purpose),
    MobileNumber: new FormControl(this.visitorlist.MobileNumber),
    VisitingDate: new FormControl(this.visitorlist.VisitingDate),
    Hostname: new FormControl(this.visitorlist.hname),
  });
//  list:VisitorInfo[]=[];
    // Ensure this is initialized correctly
  constructor(private srv: DatasourceServiceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetvisitorDataById(SelId).subscribe(
          {
            next:(data)=>{
              this.visitorlist=data;
              this.PrepareForm1();
          }
        });
      }
    });
  }
  private PrepareForm1(): void {
    this.frm.controls['id'].setValue(this.visitorlist.id);
    this.frm.controls['Name'].setValue(this.visitorlist.Name);
    this.frm.controls['Location'].setValue(this.visitorlist.Location);
    this.frm.controls['ParentCompany'].setValue(this.visitorlist.ParentCompany);
    this.frm.controls['Purpose'].setValue(this.visitorlist.Purpose);
    this.frm.controls['MobileNumber'].setValue(this.visitorlist.MobileNumber);
    this.frm.controls['VisitingDate'].setValue(this.visitorlist.VisitingDate);
    this.frm.controls['hname'].setValue(this.visitorlist.hname);

  }

  ngOnInit(): void {
    //  this.srv.GetAllVisitors.subscribe({
    //         next:(data)=>{
    //           this.visitorlist=data.filter((r)=>(r.role?.toUpperCase() ==USERTYPE.OWNER.toUpperCase()))
    //         }
    //       })
  }

  EditVisitor(): void {
    this.visitorlist.id= this.frm.controls['id'].value;
    this.visitorlist.Name = this.frm.controls['Name'].value;
    this.visitorlist.Location = this.frm.controls['Location'].value;
    this.visitorlist.ParentCompany = this.frm.controls['ParentCompany'].value;
    this.visitorlist.Purpose= this.frm.controls['Purpose'].value;
    this.visitorlist.MobileNumber= this.frm.controls['MobileNumber'].value;
    this.visitorlist.VisitingDate= this.frm.controls['VisitingDate'].value;
    this.visitorlist.hname= this.frm.controls['hname'].value;


    this.srv.EditVisitor(this.visitorlist).subscribe({
      next: (_) => {
        this.router.navigate(['home/visitorlist']);  // Redirect to the restaurant list after successful edit
      }
    });
  }
}

