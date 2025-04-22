import { Component, OnInit } from '@angular/core';
import { RestInfo } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  RestData:RestInfo[]=[];
  constructor( private dsrv:DataSourceService,private router:Router){}
  ngOnInit(): void {
    this.RestData=this.dsrv.GetAllRestaurant();
  }
  GotoAddRestaurant(){
    this.router.navigate(['AddRestaurant'])
  }
}
