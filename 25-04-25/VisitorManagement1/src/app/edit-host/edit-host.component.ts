import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HostInfo } from '../host-info';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.css']
})
export class EditHostComponent {
  CurrentHost:HostInfo={
    id: '',
    hname: '',
    employeeNo: '',
    dept: '',
    CNo: '',
    email: '',
    password: '',
    role: ''
    
  };
  frm:FormGroup=new FormGroup({
       
        hname:new FormControl(this.CurrentHost.hname),
        employeeNo:new FormControl(this.CurrentHost.employeeNo),
        dept:new FormControl(this.CurrentHost.dept),
        CNo:new FormControl(this.CurrentHost.CNo),
        email:new FormControl(this.CurrentHost.email),
        password:new FormControl(this.CurrentHost.password),
        role:new FormControl(this.CurrentHost.role),
      });
      constructor(private dsrv:DataSourceService,private activerouter:ActivatedRoute,private router:Router){ 
        this.activerouter.paramMap.subscribe((prms)=>{
          let SelId=prms.get('id');
          console.log(SelId);
          if(SelId!=null){
            this.dsrv.GetHostDataById(SelId).subscribe({
              next:(data)=>{
                console.log(data)
                this.CurrentHost=data;
                this.PrepareForm();
              }
            });
          }
        }) 
      }
      private PrepareForm():void{
        //this.frm.controls['id'].setValue(this.CurrentHost.id);
        this.frm.controls['hname'].setValue(this.CurrentHost.hname);
        this.frm.controls['employeeNo'].setValue(this.CurrentHost.employeeNo);
        this.frm.controls['dept'].setValue(this.CurrentHost.dept);
        this.frm.controls['CNo'].setValue(this.CurrentHost.CNo);
        this.frm.controls['email'].setValue(this.CurrentHost.email);
        this.frm.controls['password'].setValue(this.CurrentHost.password);
        this.frm.controls['role'].setValue(this.CurrentHost.role);
      }
    ngOnInit(): void {
      
    }
    EditHost(){
     //this.CurrentHost.id=this.frm.controls['id'].value;
     this.CurrentHost.hname=this.frm.controls['hname'].value;
     this.CurrentHost.employeeNo=this.frm.controls['employeeNo'].value;
     this.CurrentHost.dept=this.frm.controls['dept'].value;
     this.CurrentHost.CNo=this.frm.controls['CNo'].value;
     this.CurrentHost.email=this.frm.controls['email'].value;
     this.CurrentHost.password=this.frm.controls['password'].value;
     this.CurrentHost.role=this.frm.controls['role'].value;
     this.dsrv.EditHost(this.CurrentHost).subscribe({
      next:(_)=>{
        this.router.navigate(['Home/HostList'])
      }
     })
    }
}
