import { Component } from '@angular/core';
import { Restaurantinfo } from '../restaurantinfo';
import { UserinfoNew } from '../userinfo';
import { DataSourseService } from '../data-sourse.service';

@Component({
  selector: 'app-ownerrestaurant',
  templateUrl: './ownerrestaurant.component.html',
  styleUrls: ['./ownerrestaurant.component.css']
})
export class OwnerrestaurantComponent {
 restaurantData:Restaurantinfo[]=[];
  loggedInUserData:UserinfoNew | undefined;
  constructor(private srv:DataSourseService)
  {
    //get the loggedinuser data from 
    let strUserData:string|null=sessionStorage.getItem('UserData');
    if(strUserData!=null)
    {
      this.loggedInUserData==JSON.parse(strUserData);
    }
    else
    {
      this.loggedInUserData=undefined;
    }
  }
  ngOnInit():void {
    this.srv.GetAllRestaurant().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined)
        {
          this.restaurantData=data.filter((elm)=>{
            return elm.owner=this.loggedInUserData?.id;
          })
        }
      }
    });
  }
} 
      
  




