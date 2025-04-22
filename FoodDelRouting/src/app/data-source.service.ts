import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { RestInfo } from './rest-into';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  constructor() {

   }
  AddNewUserEntry(data:UserInfo){
    this.UserList.push(data)
  }
  GetAllUsers(){
    return this.UserList;
  }
 
}
