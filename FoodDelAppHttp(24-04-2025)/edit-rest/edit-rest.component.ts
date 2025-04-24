import { Component } from '@angular/core';
import { RestInfo } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.component.html',
  styleUrls: ['./edit-rest.component.css']
})
export class EditRestComponent {
currentUser:RestInfo={}
  frm:FormGroup=new FormGroup({
    name:new FormControl(this.currentUser.name),
    location:new FormControl(this.currentUser.location),
    owner:new FormControl(this.currentUser.owner)
  })
  constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute,private router:Router)
  {
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id')
      if(SelId!=null)
      {
        this.srv.GetRestDataById(SelId).subscribe({
          next:(data)=>{
            this.currentUser=data
            this.PrepareForm()
          }
        })
      }
    })
  }
  EditRest()
  {
    this.currentUser.name=this.frm.controls['name'].value,
    this.currentUser.location=this.frm.controls['location'].value,
    this.currentUser.owner=this.frm.controls['owner'].value
    this.srv.EditRest(this.currentUser).subscribe({
      next:(_)=>{
        this.router.navigate(['RestList'])
      }
    })
  }
  private PrepareForm():void
  {
    this.frm.controls['name'].setValue(this.currentUser.name)
    this.frm.controls['location'].setValue(this.currentUser.location)
    this.frm.controls['owner'].setValue(this.currentUser.owner)
  }
}
