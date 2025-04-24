import { Component,OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestaurantInfo, RestaurantInfoNew } from '../restaurant-info';
import { UserInfoNew } from '../user-info';


@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent implements OnInit {
  restaurantData:RestaurantInfoNew[]=[];
  loggedInUserData: any| undefined;
  
constructor(private srv:DataSourceService){

let strUserData:string|null=sessionStorage.getItem("UserData");
if(strUserData!=null){
  this.loggedInUserData=JSON.parse(strUserData);
}
else{
  this.loggedInUserData=undefined;
}
}
  ngOnInit(): void {
    this.srv.GetAllRests().subscribe({
      next: (data)=>{
        if(this.loggedInUserData!=undefined)
          {
            this.restaurantData=data.filter((elm) => {
              return elm.owner==this.loggedInUserData?.id

            });

        }
      }

    });
  }
}
