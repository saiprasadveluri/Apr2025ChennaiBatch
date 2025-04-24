import { Component } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent {
    currentRestaurant:RestaurantInfo={}
  
    
  
    rstfrm:FormGroup= new FormGroup({
      name:new FormControl(this.currentRestaurant.name),
      location:new FormControl(this.currentRestaurant.location),
      owner:new FormControl(this.currentRestaurant.owner)
    });
  
    constructor(private rstsrv:DataSourceService , private activeRoute:ActivatedRoute, private router:Router)
    {
      this.activeRoute.paramMap.subscribe((prms)=>{
        let SelId = prms.get('id');
        console.log(SelId);
        if(SelId!=null)
        {
          this.rstsrv.GetRestaurantDataById(SelId).subscribe(
            {
              next:(data)=>{
                this.currentRestaurant=data;
                this.PrepareForm();
              }
            }
          )
        }
      });
      // this.srv.GetUserDataById()
    }
  
    private PrepareForm():void
    {
      this.rstfrm.controls['name'].setValue(this.currentRestaurant.name);
      this.rstfrm.controls['location'].setValue(this.currentRestaurant.location);
      this.rstfrm.controls['owner'].setValue(this.currentRestaurant.owner);
  
  
    }
    ngOnInit(): void {
      
    }
  
    
    EditRestaurant()
    {
      this.currentRestaurant.name=this.rstfrm.controls['name'].value;
      this.currentRestaurant.location=this.rstfrm.controls['location'].value;
      this.currentRestaurant.owner=this.rstfrm.controls['owner'].value;
      this.rstsrv.EditRestaurant(this.currentRestaurant).subscribe({
        next:(_)=>{
          this.router.navigate(['home/RestaurantList'])
        }
      })
    }
  }
