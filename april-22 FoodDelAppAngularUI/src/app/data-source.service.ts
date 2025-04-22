import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];

  constructor() 
  { 

  }
  AddNewUserEntry(data:UserInfo)
  {
    this.UserList.push(data);
  }
  GetAllUsers()
  {
    return this.UserList;
  }
}

