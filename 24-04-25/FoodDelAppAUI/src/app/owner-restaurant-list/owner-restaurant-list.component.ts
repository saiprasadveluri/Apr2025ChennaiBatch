import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestaurantInfo } from '../restaurant-info';
import { UserInfoNew } from '../user-info';
import { RestaurantInfoNew } from '../restaurant-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent implements OnInit{

  restaurantData:RestaurantInfoNew[]=[];
  loggedInUserData:UserInfoNew|undefined;

  constructor(private srv:DataSourceService,private router:Router){
    let strUserData:string|null=sessionStorage.getItem('UserData');
    if(strUserData!=null)
    {
      this.loggedInUserData=JSON.parse(strUserData);
    }
    else{
      this.loggedInUserData=undefined;
    }

  }
  ngOnInit():void{
    this.srv.GetAllRest().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined){
          this.restaurantData=data.filter((elm)=>{
            return elm.owner==this.loggedInUserData?.id;
          })
        }

      }
    })

  }


}
