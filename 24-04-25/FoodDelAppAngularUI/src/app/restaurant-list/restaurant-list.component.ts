import { Component, OnInit } from '@angular/core';
import { RestInfo, RestInfoNew } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  RestData: RestInfo[] = [];
  RestDataNew: RestInfoNew[] = [];
  constructor(private http: HttpClient, private dsrv: DataSourceService, private router: Router) { }
  ngOnInit(): void {
    this.ShowGrids();
      }
  
  private ShowGrids(){
    this.dsrv.GetAllRestaurant()
   .subscribe({next:(Rdata)=>{this.RestDataNew=Rdata;}})
  }
  GotoAddRestaurant() {
    this.router.navigate(['AddRestaurant'])
  }
  DeleteRestaurant(id: any) {
    this.dsrv.DeleteRestaurant(id).subscribe({
      next:(_)=>{
        this.ShowGrids();
      }
    })
  }

  EditRestaurant(id: any) {
    this.router.navigate([`EditRestaurant/${id}`])
  }
}