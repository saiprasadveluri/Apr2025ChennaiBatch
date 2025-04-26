import { Component } from '@angular/core';
import { hostInfo } from '../user-info';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.css']
})
export class EditHostComponent {
  currentHost:any={};
  hstfrm: FormGroup = new FormGroup({
    hostName: new FormControl(this.currentHost.hostName),
    empNo: new FormControl(this.currentHost.empNo),
    dept: new FormControl(this.currentHost.dept),
    location: new FormControl(this.currentHost.location),
    contactNo: new FormControl(this.currentHost.contactNo),
    email: new FormControl(this.currentHost.email),
    password: new FormControl(this.currentHost.password),
    role: new FormControl(this.currentHost.role)

  });

  constructor(private srv: DataSourceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe((prms) => {
      let SelId = prms.get('id');
      console.log(SelId);
      if (SelId != null) {
        this.srv.GetHostDataById(SelId).subscribe(
          {
            next: (data) => {
              this.currentHost = data;
              this.PrepareForm();
            }
          }
        )
      }
    });
  }

  private PrepareForm(): void {
    this.hstfrm.controls['hostName'].setValue(this.currentHost.hostName);
    this.hstfrm.controls['empNo'].setValue(this.currentHost.empNo);
    this.hstfrm.controls['dept'].setValue(this.currentHost.dept);
    this.hstfrm.controls['location'].setValue(this.currentHost.location);
    this.hstfrm.controls['contactNo'].setValue(this.currentHost.contactNo);
    this.hstfrm.controls['email'].setValue(this.currentHost.email);
    this.hstfrm.controls['password'].setValue(this.currentHost.password);
    this.hstfrm.controls['role'].setValue(this.currentHost.role);


  }
  ngOnInit(): void {

  }
  EditHost() {
    this.currentHost.hostName = this.hstfrm.controls['hostName'].value;
    this.currentHost.location = this.hstfrm.controls['location'].value;
    this.srv.EditHost(this.currentHost).subscribe({
      next: (_) => {
        this.router.navigate(['home/hostList'])
      }
    })

  }

}
