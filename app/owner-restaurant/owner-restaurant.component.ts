import { Component, OnInit } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';
import { UserInfo, USerInfoNew } from '../user-info';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-owner-restaurant',
  templateUrl: './owner-restaurant.component.html',
  styleUrls: ['./owner-restaurant.component.css']
})
export class OwnerRestaurantComponent implements OnInit {
     restaurantData:RestaurantInfo[]=[];
     loggedInUserData:USerInfoNew|undefined;
     constructor(private srv:DataSourceService)
     {
      let strUserData:string|null=sessionStorage.getItem('UserData')
      if(strUserData!=null)
      {
        this.loggedInUserData=JSON.parse(strUserData);
      }
      else{
        this.loggedInUserData=undefined;
     }
    }
    ngOnInit():void{
       this.srv.GetAllRestaurant().subscribe({
        next:(data)=>{
          if(this.loggedInUserData!=undefined)
          {
            this.restaurantData=data.filter((elm)=>{
              return elm.owner==this.loggedInUserData?.id;
            })
          }
        }
         })

    }

  }
