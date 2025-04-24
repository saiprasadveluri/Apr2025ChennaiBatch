import { Component, OnInit } from '@angular/core';
import { RestaurantInfo, RestaurantInfoNew } from '../restaurant-info';
import { RestSourceService } from '../rest-source.service';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  restData:RestaurantInfoNew[]=[];
  constructor(private http:HttpClient,private rSrv:DataSourceService, private router:Router){

  }
  ngOnInit(): void {
    this.rSrv.GetAllRests().subscribe({
      next:(data)=>{
        this.restData=data;
      }
    });
  }
  private ShowGrid(){
    this.rSrv.GetAllRests().subscribe({
      next:(data)=>{
        this.restData=data;
      }
    });
  }
  DeleteRest(id:any){
    this.rSrv.DeleteRest(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
  GotoAddRest(){
    this.router.navigate(['AddRestaurant']);
  }
  EditRest(id:any){
    this.router.navigate([`EditRestaurant/${id}`])
  }

}
