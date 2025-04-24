import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';
import { RestInfo } from '../rest-info';
import { UserInfo, UserInfoNew } from '../user-info';

@Component({
  selector: 'app-ownerrestaurant',
  templateUrl: './ownerrestaurant.component.html',
  styleUrls: ['./ownerrestaurant.component.css']
})
export class OwnerrestaurantComponent implements OnInit{
  restData:RestInfo[]=[];
  loggedInUserData:UserInfoNew|undefined
  constructor(private srv:DatasourceService)
  {
    let strUserData:string|null=sessionStorage.getItem('UserData');
    if(strUserData!=null)
    {
      this.loggedInUserData=JSON.parse(strUserData);
    }
    else{
      this.loggedInUserData=undefined;
    }
  }
  ngOnInit(): void {
    this.srv.GetAllRest().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined)
        {
          this.restData=data.filter((elm)=>{
            return elm.owner==this.loggedInUserData?.id;
          }
          )
        }

      }
    })
  }
}
