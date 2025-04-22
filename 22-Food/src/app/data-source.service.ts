import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
 constructor(private srv:DataSourceService) {
  

  }
  AddNewUserEntry(data:UserInfo)
  {
    this.UserList.push(data);
  }
  GetAllUser()
  {
    return this.UserList;
  }
}
