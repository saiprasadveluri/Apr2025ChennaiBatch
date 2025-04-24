import { Component } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restaurantData: RestaurantInfo[] = [];
  restfrm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    location: new FormControl(''),
    owner: new FormControl(1)
  })

  constructor(private rstsrv:DataSourceService, private router:Router)
  {
   
  }

  AddNewRestaurant() {
    let restaurantData: RestaurantInfo = {
      id: this.restfrm.controls['id'].value,
      name: this.restfrm.controls['name'].value,
      location: this.restfrm.controls['location'].value,
      owner: this.restfrm.controls['owner'].value
    }

    console.log(restaurantData);
    this.rstsrv.AddNewRestaurantEntry(restaurantData).subscribe(
      {
        next:(data)=>{
          this.router.navigate(['RestaurantList']);
        }
      }
    );
    this.router.navigate(['RestaurantList']);
  }
}
