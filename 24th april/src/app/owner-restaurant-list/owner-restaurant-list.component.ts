import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestaurantInfo } from '../restaurant-info';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent implements OnInit{
  restaurantData:RestaurantInfo[]=[];
  loggedInUserData:UserInfoNew|undefined;
  constructor(private srv:DataSourceService)
  {
    //Get the loggedInUser data from browser storage (session storage)
    let strUserData:string|null = sessionStorage.getItem('UserData');
    if(strUserData!=null)
    {
       this.loggedInUserData=JSON.parse(strUserData);
    }
    else
    {
      this.loggedInUserData=undefined;
    }
  }

  ngOnInit(): void {
    console.log(this.loggedInUserData)
    this.srv.GetAllRestaurants().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined){
          
          this.restaurantData=data.filter((elm)=>{
            console.log(elm.owner);
            return elm.owner==this.loggedInUserData?.id;
          })
          
        }
      }
    })
  }
}
