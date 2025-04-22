import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { RestInfo } from './rest-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[]
  restData:RestInfo={}
  constructor() { }
  AddNewUserEntry(data:UserInfo)
  {
    this.UserList.push(data)
  }
  GetAllUser()
  {
    return this.UserList
  }
}
