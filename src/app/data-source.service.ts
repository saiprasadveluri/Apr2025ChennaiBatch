import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { RestInfo } from './rest-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  RestList: RestInfo[]=[];
  constructor() { }
  AddNewUserEntry(data:UserInfo){
    this.UserList.push(data);
  }
  GetAllUsers(){
    return this.UserList;
  }
  AddNewRestaurantEntry(Rdata:RestInfo){
    this.RestList.push(Rdata);
  }
  GetAllRestaurant(){
    return this.RestList;
  }
}
