import { Component } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
 restdata:RestaurantInfo[]=[];
 constructor(private http:HttpClient,private srv:DataSourceService,private router:Router)
 {

 }
 ngOnInit():void
 {
   this.srv.GetAllRestaurant()
   this.http.get<RestaurantInfo[]>('http://localhost:3004/restaurantInfo')
   .subscribe({
    next:(data)=>{
      this.restdata=data;
    }
   })
   }
   private showGrid()
  {
  this.srv.GetAllRestaurant ()
   .subscribe({
    next:(data)=>{
      this.restdata=data;
    }
     
   })
}
DeleteRestaurant(id:any)
{
  this.srv.DeleteRestaurant(id).subscribe(
    {
      next:(_)=>{
        this.showGrid();
      }
    }
  )
}
GotoAddRestaurant()
{
 this.router.navigate(['home/AddRestaurant']);
}
EditRestaurant(id:any):void
{
  this.router.navigate([`home/EditRestaurant/${id}`]);
}
}

 

