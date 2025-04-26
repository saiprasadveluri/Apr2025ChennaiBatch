import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent {
  currentVisitor: any = {};
  vstfrm: FormGroup = new FormGroup({
    visitorName: new FormControl(this.currentVisitor.visitorName),
    visitorCompany: new FormControl(this.currentVisitor.visitorCompany),
    visitorPurpose: new FormControl(this.currentVisitor.visitorPurpose),
    visitorMobile: new FormControl(this.currentVisitor.visitorMobile),
    visitorDate: new FormControl(this.currentVisitor.visitorDate),
    hostName: new FormControl(this.currentVisitor.hostName)
  });


  constructor(private srv: DataSourceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe((prms) => {
      let SelId = prms.get('id');
      console.log(SelId);
      if (SelId != null) {
        this.srv.GetVisitorDataById(SelId).subscribe(
          {
            next: (data) => {
              this.currentVisitor = data;
              this.PrepareForm();
            }
          }
        )
      }
    });
    // this.srv.GetUserDataById()
  }

  private PrepareForm(): void {
    this.vstfrm.controls['empNo'].setValue(this.currentVisitor.empNo);
    this.vstfrm.controls['visitorName'].setValue(this.currentVisitor.visitorName);
    this.vstfrm.controls['visitorCompany'].setValue(this.currentVisitor.visitorCompany);
    this.vstfrm.controls['visitorPurpose'].setValue(this.currentVisitor.visitorPurpose);
    this.vstfrm.controls['visitorMobile'].setValue(this.currentVisitor.visitorMobile);
    this.vstfrm.controls['visitorDate'].setValue(this.currentVisitor.visitorDate);
    this.vstfrm.controls['hostName'].setValue(this.currentVisitor.hostName);


  }
  ngOnInit(): void {
  }



  EditVisitor() {
    this.currentVisitor.empNo = this.vstfrm.controls['empNo'].value;
    this.currentVisitor.visitorName = this.vstfrm.controls['visitorName'].value;
    this.currentVisitor.visitorCompany = this.vstfrm.controls['visitorCompany'].value;
    this.currentVisitor.visitorPurpose = this.vstfrm.controls['visitorPurpose'].value;
    this.currentVisitor.visitorMobile = this.vstfrm.controls['visitorMobile'].value;
    this.currentVisitor.visitorDate = this.vstfrm.controls['visitorDate'].value;
    this.currentVisitor.hostName = this.vstfrm.controls['hostName'].value;
    // this.currentUser.name=this.frm.controls['displayName'].value;
    this.srv.EditVisitor(this.currentVisitor).subscribe({
      next: (_) => {
        this.router.navigate(['home/visitorList'])
      }
    })
  }

}
