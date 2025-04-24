import { Component } from '@angular/core';
import { RestaurantInfo, RestaurantInfoNew } from '../restaurant-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {

RestD:RestaurantInfo[] = [];
RestDNew:RestaurantInfoNew[] = [];
  
  constructor(private srv:DataSourceService,private router:Router){

  }
  ngOnInit(): void {
    this.srv.GetAllRest().subscribe({
      next:(data)=>{
        this.RestDNew = data;
      }
    });
  }
  GotoAddRest(){
    this.router.navigate(['AddRestaurant'])
  }
  private ShowGrid(){
    this.srv.GetAllRest().subscribe({
      next:(data)=>{
        this.RestDNew = data;
      }
    });
  }
  DeleteRest(id:any) {
    this.srv.DeleteRest(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
}