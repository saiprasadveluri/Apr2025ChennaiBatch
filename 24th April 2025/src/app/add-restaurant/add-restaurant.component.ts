import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestSourceService } from '../rest-source.service';
import { Router } from '@angular/router';
import { RestaurantInfo, RestaurantInfoNew } from '../restaurant-info';
import { OwnerInfo } from '../owner-info';
import { OwnerSourceService } from '../owner-source.service';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  frm:FormGroup=new FormGroup({
    name:new FormControl(''),
    location:new FormControl('HYD'),
    owner:new FormControl(1)
  });
  constructor(private srv:DataSourceService, private router:Router){

  }
  AddNewRest(){
    let restData:RestaurantInfoNew={
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      owner:this.frm.controls['owner'].value,
    }
    console.log(restData);
    this.srv.AddNewRestEntries(restData).subscribe({
      next:(data)=>{
        this.router.navigate(['home/RestaurantList']);
      }
    });
  }

}
