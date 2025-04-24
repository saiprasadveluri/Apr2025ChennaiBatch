import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';
import { Restaurantinfo } from '../restaurantinfo';
import { UserInfoNow } from '../userinfo';

@Component({
  selector: 'app-owner-restaurant',
  templateUrl: './owner-restaurant.component.html',
  styleUrls: ['./owner-restaurant.component.css']
})
export class OwnerRestaurantComponent implements OnInit{
  restddata:Restaurantinfo[]=[];
  loggedInUserdata:UserInfoNow|undefined
  constructor(private srv:DatasourceService){
    let strUserdata:string|null=sessionStorage.getItem('Userdata');
    if(strUserdata=null){
      this.loggedInUserdata=JSON.parse(strUserdata);
    }
    else{
      this.loggedInUserdata=undefined;
    }

  }
  ngOnInit(): void {
    this.srv.GetAllRestaurant().subscribe({
      next:(data)=>{
        if(this.loggedInUserdata!=undefined)
        {
          sessionStorage.setItem('Userdata',JSON.stringify(this.loggedInUserdata))
          this.restddata=data.filter((elm)=>{
          return elm.owner==this.loggedInUserdata?.id;
        })

      }
    }
    });
  }

}
