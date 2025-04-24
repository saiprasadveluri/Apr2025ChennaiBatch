import { Component, OnInit } from '@angular/core';
import { UserInfoNew } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestInfo } from '../rest-into';
import { UserType } from '../user-type';

@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.component.html',
  styleUrls: ['./edit-rest.component.css']
})
export class EditRestComponent implements OnInit {
  OwnerList:UserInfoNew[]=[]
  currentRest:RestInfo={}
    res:FormGroup =new FormGroup({
    //id:new FormControl(''),
    name:new FormControl(''),
    location:new FormControl(''),
    owner:new FormControl(''),
    });
    constructor(private dsrv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router){
          this.activeRoute.paramMap.subscribe((prms)=>{
            let SelId =prms.get('id')
            if(SelId!=null){
              this.dsrv.GetRestById(SelId).subscribe({
                next:(data)=>{
                  this.currentRest=data
                  this.PrepareForm1()
                }
              })
            }
          })
        }
  ngOnInit(): void {
      
      this.dsrv.GetAllUsers().subscribe({
        next:(data)=>{
           this.OwnerList= data.filter((i)=>(i.role==UserType.Owner))
        }
      }); 
      console.log(this.OwnerList)
    } 
  private PrepareForm1():void{
    this.res.controls['name'].setValue(this.currentRest.name)
    this.res.controls['location'].setValue(this.currentRest.location)
    this.res.controls['owner'].setValue(this.currentRest.owner)
    //this.frm.controls['password'].setValue(this.currentUser.password)
  }
  EditRest(){
    this.currentRest.name=this.res.controls['name'].value;
    this.currentRest.location=this.res.controls['location'].value;
    this.currentRest.owner=this.res.controls['owner'].value;
    //this.currentUser.password=this.frm.controls['password'].value;
    this.dsrv.EditRest(this.currentRest).subscribe({
      next:(_)=>{
        this.router.navigate(['Home/ViewRestaurant'])
      }
    })
    console.log(this.currentRest)
  }
}
