import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestaurantInfo, RestaurantInfoNew} from '../restaurant-info';
import { OwnerInfo } from '../owner-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  
 RsetD:RestaurantInfo={};
  form:FormGroup = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    location:new FormControl(''),
    owner:new FormControl('')
  });

  ngOnInit(): void {
    // this.OwnerList
  }
  constructor(private datasrv:DataSourceService,private router:Router){
  }

  addnewRest(){
    let RestDNew:RestaurantInfoNew={
      // id:this.form.controls['id'].value,
      name:this.form.controls['name'].value,
      location:this.form.controls['location'].value,
      owner:this.form.controls['owner'].value
    }
    console.log(RestDNew)
    this.datasrv.AddNewRestEntry(RestDNew).subscribe({
      next: () => {
        this.router.navigate(['home/ListRestaurant']);
      }
    });
    // this.router.navigate(['home/ListRestaurant'])
  }
}