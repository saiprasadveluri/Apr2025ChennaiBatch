import { Component } from '@angular/core';
import { RestaurantInfo, RestaurantInfoNew } from '../restaurant-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent {

RestD:RestaurantInfo[] = [];
RestDNew:RestaurantInfoNew[] = [];
  
  constructor(private srv:DataSourceService,private router:Router){

  }
  ngOnInit(): void {
    this.srv.getAllRest().subscribe({
      next:(dat)=>{
        this.RestDNew = dat;
      }
    });
  }
  GotoAddRest(){
    this.router.navigate(['AddRestaurant'])
  }
  private ShowGrid(){
    this.srv.getAllRest().subscribe({
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
  // EditRest(id:any): void {
  //   this.router.navigate([`EditUser/${id}`]);
  //   }
}
