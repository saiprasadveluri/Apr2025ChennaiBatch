import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.css']
})
export class EditHostComponent {
ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  currentHost:HostInfo={
    id: '',
    name: '',
    employeenumber: '',
    department: '',
    location: '',
    contactnumber: '',
    email: '',
    password: '',
    role:'',
  }
    frm:FormGroup=new FormGroup({
       
        name:new FormControl(this.currentHost.name),
        employeenumber:new FormControl(this.currentHost.employeenumber),
        department:new FormControl(this.currentHost.department),
        location:new FormControl(this.currentHost.location),
        contactnumber:new FormControl(this.currentHost.contactnumber),
        email:new FormControl(this.currentHost.email),
        password:new FormControl(this.currentHost.password),
        role:new FormControl(this.currentHost.role),
        
        

  }
);
constructor(private srv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router){
  this.activeRoute.paramMap.subscribe((prms)=>{
    let SelId=prms.get('id');
    console.log(SelId);

    if(SelId!=null){
      this.srv.GetHostDataById(SelId).subscribe({
        next:(data)=>{
          console.log(data)
          this.currentHost=data;
          this.PrepareForms();
        }
      })
    }
})
  
}
private PrepareForms():void{
  this.frm.controls['name'].setValue(this.currentHost.name);
  this.frm.controls['employeenumber'].setValue(this.currentHost.employeenumber);
  this.frm.controls['department'].setValue(this.currentHost.department);
  this.frm.controls['location'].setValue(this.currentHost.location);
  this.frm.controls['contactnumber'].setValue(this.currentHost.contactnumber);
  this.frm.controls['email'].setValue(this.currentHost.email);
  this.frm.controls['password'].setValue(this.currentHost.password);
  this.frm.controls['role'].setValue(this.currentHost.role);
}
 

EditHost(){
  this.currentHost.name=this.frm.controls['name'].value;
  this.currentHost.employeenumber=this.frm.controls['employeenumber'].value;
  this.currentHost.department=this.frm.controls['department'].value;
  this.currentHost.location=this.frm.controls['location'].value;
  this.currentHost.contactnumber=this.frm.controls['contactnumber'].value;
  this.currentHost.email=this.frm.controls['email'].value;
  this.currentHost.password=this.frm.controls['password'].value;
  this.currentHost.role=this.frm.controls['role'].value;

  this.srv.EditHost(this.currentHost).subscribe({
    next:(_)=>{
      this.router.navigate(['Home/HostList']);
    }
  })
  

}

}
