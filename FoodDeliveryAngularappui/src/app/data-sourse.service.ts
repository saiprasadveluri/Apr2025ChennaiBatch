import { Injectable } from '@angular/core';
import { Userinfo } from './userinfo';

@Injectable({
  providedIn: 'root'
})
export class DataSourseService {
  UserList:Userinfo[]=[];

  constructor() {

   }
   AddNewUserEntry(data:Userinfo)
   {
    this.UserList.push(data);
   }
   GetAllUsers() {
    return this.UserList;
   }
}
