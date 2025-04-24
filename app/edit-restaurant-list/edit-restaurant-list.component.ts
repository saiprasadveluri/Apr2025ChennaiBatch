import { Component } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant-list',
  templateUrl: './edit-restaurant-list.component.html',
  styleUrls: ['./edit-restaurant-list.component.css']
})
export class EditRestaurantListComponent {
  currentUser:RestaurantInfo={}
     frm:FormGroup=new FormGroup({
      name:new FormControl('this.currentUser.name'),
      location:new FormControl('this.currentUser.location'),
      owner:new FormControl('this.currentUser.owner'),
     });
     currentRest:RestaurantInfo={};

      constructor(private srv:DataSourceService,private activeRoute:ActivatedRoute,private router:Router)
      {
        this.activeRoute.paramMap.subscribe((prms)=>{
          let SelId=prms.get('id');
          console.log(SelId)
          if(SelId!=null)
          {
            this.srv.GetRestDataById(SelId).subscribe(
              {
                next:(data)=>{
                  console.log(data);
                  this.currentRest=data;
                  this.PrepareForm();
                }
              }
            )
          }
        })
      
      }
      private PrepareForm():void{
        this.frm.controls['displayName'].setValue(this.currentUser.name);
        this.frm.controls['location'].setValue(this.currentUser.location);
        this.frm.controls['role'].setValue(this.currentUser.owner);
        // this.frm.controls['password'].setValue(this.currentUser.password);
      }
      ngOnInit():void{
  
      }
      EditRestaurant():void
    {
       this.currentUser.name=this.frm.controls['name'].value;
       this.currentUser.location=this.frm.controls['location'].value;
       this.currentUser.owner=this.frm.controls['owner'].value;
       //this.currentUser.password=this.frm.controls['password'].value;
       this.srv.EditRestaurant(this.currentUser).subscribe({
        next:(_)=>{
          this.router.navigate(['home/RestaurantList']);
        }
       })
    }
}
