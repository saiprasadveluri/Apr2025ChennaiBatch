import { Component, OnInit } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
restaurantData:RestaurantInfo[]=[];
constructor(private http: HttpClient, private rstsrv: DataSourceService, private router:Router)
{

}


GotoAddRestaurants()
{
  this.router.navigate(['home/AddRestaurant']);
}





ngOnInit(): void {
  this.ShowGrid()
  this.rstsrv.GetAllRestaurants().subscribe({
    next:(data)=>{
      this.restaurantData = data;
    }
  })
}

private ShowGrid() {
  this.rstsrv.GetAllRestaurants().subscribe({
    next: (data) => {
      this.restaurantData = data;
    }
  });
}

DeleteRestaurant(id: any) {
  this.rstsrv.DeleteRestaurant(id).subscribe(
    {
      next: (_) => {
        this.ShowGrid();
      }
    }
  )
}

GotoAddRestaurant() {
  this.router.navigate(['AddRestaurant']);
}

EditRestaurant(id:any)
{
  this.router.navigate([`home/EditRestaurant/${id}`]);
}
}
