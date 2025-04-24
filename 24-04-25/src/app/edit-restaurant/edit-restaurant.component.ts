import { Component, OnInit } from '@angular/core';
import { RestInfoNew } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../datasource.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit{
  CurrentRest:RestInfoNew={};
      frm:FormGroup=new FormGroup({
        id:new FormControl(this.CurrentRest.id),
        name:new FormControl(this.CurrentRest.name),
        location:new FormControl(this.CurrentRest.location),
        owner:new FormControl(this.CurrentRest.owner),
      });
      constructor(private dsrv:DataSourceService,private activerouter:ActivatedRoute,private router:Router){ 
        this.activerouter.paramMap.subscribe((prms)=>{
          let SelId=prms.get('id');
          console.log(SelId);
          if(SelId!=null){
            this.dsrv.GetRestaurantDataById(SelId).subscribe({
              next:(data)=>{
                console.log(data)
                this.CurrentRest=data;
                this.PrepareForm();
              }
            });
          }
        }) 
      }
      private PrepareForm():void{
        this.frm.controls['id'].setValue(this.CurrentRest.id);
        this.frm.controls['name'].setValue(this.CurrentRest.name);
        this.frm.controls['location'].setValue(this.CurrentRest.location);
        this.frm.controls['owner'].setValue(this.CurrentRest.owner);
      }
    ngOnInit(): void {
      
    }
    EditRestaurant(){
     this.CurrentRest.name=this.frm.controls['id'].value;
     this.CurrentRest.name=this.frm.controls['name'].value;
     this.CurrentRest.location=this.frm.controls['location'].value;
     this.CurrentRest.owner=this.frm.controls['owner'].value;
     this.dsrv.EditRestaurant(this.CurrentRest).subscribe({
      next:(_)=>{
        this.router.navigate(['home/RestaurantList'])
      }
     })
    }
  }
  