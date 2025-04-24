import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestInfo } from '../rest-into';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent implements OnInit {
  RestData:RestInfo[]=[];
  loggedInUserData:UserInfoNew|undefined
  constructor(private srv:DataSourceService){
    this.srv.GetAllRests().subscribe({
      next:(data)=>{
        let strUserData:string|null=sessionStorage.getItem('UserData');
        if(strUserData!=null){
          this.loggedInUserData=JSON.parse(strUserData)
        }
        else{
          this.loggedInUserData=undefined
        }
      }
    })
  }
  ngOnInit(): void {
    this.srv.GetAllRests().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined){
          this.RestData=data.filter((elm)=>{
            return elm.owner==this.loggedInUserData?.id
          })
        }
      }
    })
  }

}
