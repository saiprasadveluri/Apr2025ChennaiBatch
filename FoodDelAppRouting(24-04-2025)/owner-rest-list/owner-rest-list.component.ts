import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { RestInfo, RestInfoNew } from '../rest-info';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-owner-rest-list',
  templateUrl: './owner-rest-list.component.html',
  styleUrls: ['./owner-rest-list.component.css']
})
export class OwnerRestListComponent implements OnInit {
  restaurantData:RestInfoNew[]=[]
  restData:RestInfoNew[]=[]
  loggedInUserData:UserInfoNew|undefined
constructor(private srv:DataSourceService) 
{
  let strUserData:string|null=sessionStorage.getItem('UserData')
  if(strUserData!=null)
  {
    this.loggedInUserData=JSON.parse(strUserData)
  }
  else
  {
    this.loggedInUserData=undefined
  }
}
  ngOnInit(): void {
    this.srv.GetRestData().subscribe({
      next:(data)=>{
      if(this.loggedInUserData!=undefined)
      {
        this.restaurantData=data.filter((elm)=>{
          return elm.owner==this.loggedInUserData?.id
        }
        )
      }
      }
    })
  }
}
