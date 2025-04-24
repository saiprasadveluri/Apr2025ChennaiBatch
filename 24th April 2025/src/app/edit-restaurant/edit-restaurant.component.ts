import { Component, OnInit } from '@angular/core';
import { RestaurantInfoNew } from '../restaurant-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit{
  currentRest:RestaurantInfoNew={}
  frm:FormGroup=new FormGroup({
    name:new FormControl(this.currentRest.name),
    location:new FormControl(this.currentRest.location),
    owner:new FormControl(this.currentRest.owner),
  });
  constructor(private srv:DataSourceService, private activeRoute:ActivatedRoute, private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetRestById(SelId).subscribe({
          next:(data)=>{
            this.currentRest=data;
            this.PrepareForm();
          }
        })
      }
    })
  }
  private PrepareForm():void{
    this.frm.controls['name'].setValue(this.currentRest.name);
    this.frm.controls['location'].setValue(this.currentRest.location);
    this.frm.controls['owner'].setValue(this.currentRest.owner);
  }
  ngOnInit(): void {
    
  }
  EditRest(){
    this.currentRest.name=this.frm.controls['name'].value;
    this.currentRest.location=this.frm.controls['location'].value;
    this.currentRest.owner=this.frm.controls['owner'].value;
    this.srv.EditRest(this.currentRest).subscribe({
      next:(_)=>{
        this.router.navigate(['home/RestaurantList']);
      }
    })
  }

}
