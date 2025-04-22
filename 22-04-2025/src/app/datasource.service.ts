import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { RestInfo } from './rest-info';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  UserList:UserInfo[]=[];
  OwnerList:RestInfo[]=[];
  
  constructor() { }
  AddNewUserEntry(data:UserInfo)
  {
    this.UserList.push(data);
  }
  GetAllUsers()
  {
    return this.UserList;
  }
}
