import { Component } from '@angular/core';
import { HostInfoNew } from '../host-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.css']
})
export class EditHostComponent {
  currentHost:HostInfoNew={}
  frm:FormGroup=new FormGroup({
    name:new FormControl(this.currentHost.name),
    employeeNumber:new FormControl(this.currentHost.employeeNumber),
    department:new FormControl(this.currentHost.department),
    location:new FormControl(this.currentHost.location),
    contactNumber:new FormControl(this.currentHost.contactNumber),

  });
  constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute, private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetHostById(SelId).subscribe({
          next:(data)=>{
            this.currentHost=data;
            this.PrepareForm();
          }
        })
      }
    })
  }
  private PrepareForm():void{
    this.frm.controls['name'].setValue(this.currentHost.name);
    this.frm.controls['employeeNumber'].setValue(this.currentHost.employeeNumber);
    this.frm.controls['department'].setValue(this.currentHost.department);
    this.frm.controls['location'].setValue(this.currentHost.location);
    this.frm.controls['contactNumber'].setValue(this.currentHost.contactNumber);
  }
  ngOnInit(): void {
    
  }
  EditHost(){
    this.currentHost.name=this.frm.controls['name'].value;
    this.currentHost.employeeNumber=this.frm.controls['employeeNumber'].value;
    this.currentHost.department=this.frm.controls['department'].value;
    this.currentHost.location=this.frm.controls['location'].value;
    this.currentHost.contactNumber=this.frm.controls['contactNumber'].value;
    this.srv.EditHost(this.currentHost).subscribe({
      next:(_)=>{
        this.router.navigate(['HostList']);
      }
    })
  }

}
