import { Component, OnInit } from '@angular/core';

import { DataSourceService } from '../datasource.service';
import { UserInfoNew } from '../user-info';
import { RestInfoNew } from '../rest-info';

 
@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent  implements OnInit{
  RestDataNew:RestInfoNew[]=[];
  loggedInUserData:UserInfoNew | undefined;
  constructor(private srv:DataSourceService)
  {
    let strUserData:string|null= sessionStorage.getItem('UserData');
    if(strUserData!=null)
    {
      this.loggedInUserData=JSON.parse(strUserData);
    }
    else{
     
      this.loggedInUserData=undefined;
    }
  }
   
    ngOnInit(): void {
      this.srv.GetAllRestaurant().subscribe({
        next:(data)=>{
          if(this.loggedInUserData!=undefined)
          {
            this.RestDataNew=data.filter((elm)=>{
              return elm.owner==this.loggedInUserData?.id
            });
          }
   
        }
      });
    }
   
}
 
 
 
 