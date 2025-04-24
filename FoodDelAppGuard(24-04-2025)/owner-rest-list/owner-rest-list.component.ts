import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';
import { RestInfo } from '../rest-info';

@Component({
  selector: 'app-owner-rest-list',
  templateUrl: './owner-rest-list.component.html',
  styleUrls: ['./owner-rest-list.component.css']
})
export class OwnerRestListComponent implements OnInit{
  restaurantData:RestInfo[]=[]
  loggedInUserData:UserInfoNew|undefined
constructor(private srv:DataSourceService)
{
  //get the login rest from browser
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
          })
        }
      }
    })
  }
}
