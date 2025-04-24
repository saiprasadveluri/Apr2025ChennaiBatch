import { Component, OnInit } from '@angular/core';
import { Restaurantinfo } from '../restaurantinfo';
import { HttpClient } from '@angular/common/http';
import { DataSourseService } from '../data-sourse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  restdata:Restaurantinfo[]=[];

constructor(private  http:HttpClient,private srv:DataSourseService,private router:Router ){

}
ngOnInit():void{
  
  this.srv.GetAllRestaurant()
  this.http.get<Restaurantinfo[]>('http://localhost:3004/restaurantInfo')
  .subscribe({
    next:(data)=>{
      this.restdata=data;
    }

  })
  

}
private ShowGrid()
{
  this.srv.GetAllRestaurant()
  .subscribe({
    next:(data)=>{
      this.restdata=data;
}
  })
}
  deleterestaurant(id:any){
  this.srv.deleteuser(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid();

      }
    }
  )
}
GotoAddRestaurant(){
this.router.navigate(['home/addrestaurant']);
}
EditRestaurant(id:any):void{
  this.router.navigate([`home/EditRestaurant/${id}`]);
}
}



