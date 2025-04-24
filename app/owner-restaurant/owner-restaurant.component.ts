import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestaurantInfo, RestaurantInfoNew } from '../restaurant-info';
import { UserInfoNew } from '../user-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-restaurant',
  templateUrl: './owner-restaurant.component.html',
  styleUrls: ['./owner-restaurant.component.css']
})
export class OwnerRestaurantComponent implements OnInit{
  restaurantData:RestaurantInfoNew[]=[];
  loggedInUserData:UserInfoNew | undefined;

  constructor(private srv:DataSourceService,private router:Router){
    let strUserData:string|null=sessionStorage.getItem('UserData');
    if(strUserData!=null){
      this.loggedInUserData=JSON.parse(strUserData);
    }
    else{
      this.loggedInUserData!=undefined;
    }
  }
  ngOnInit(): void {
    this.srv.getAllRest().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined){
          this.restaurantData=data.filter((elm)=>{
            return elm.owner==this.loggedInUserData?.id;
          });
        }

      }
    });
  }
  GotoAddRest(){
    this.router.navigate(['home/AddRestaurant'])
  }
  private ShowGrid(){
    this.srv.getAllRest().subscribe({
      next:(data)=>{
        this.restaurantData = data;
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
