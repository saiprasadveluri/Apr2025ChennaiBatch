import { Component, OnInit } from '@angular/core';
import { Restaurantinfo } from '../restaurantinfo';
import { HttpClient } from '@angular/common/http';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { USERTYPE } from '../addrestaurant/UserTypeEnum';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restdata:Restaurantinfo[]=[];

  constructor(private  http:HttpClient,private srv:DatasourceService,private router:Router ){
  
  }
  ngOnInit():void{
    
    // this.srv.GetAllRestaurant()
    // this.http.get<Restaurantinfo[]>('http://localhost:3004/restaurantInfo')
    // .subscribe({
    //   next:(data)=>{
    //     this.restdata=data;
    //   }
  
    // })
    this.ShowGrid()

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
    this.srv.deleterestaurant(id).subscribe(
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
    this.router.navigate([`home/EditRestauarant/${id}`]);
  }
  }


