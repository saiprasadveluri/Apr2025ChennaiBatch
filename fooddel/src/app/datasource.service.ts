import { Injectable } from '@angular/core';
import { Userinfo } from './userinfo';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
UserList:Userinfo[]=[];
  constructor() {

 
 }
 AddNewUserEntry(data:Userinfo){
  this.UserList.push(data);
 }
 GetAllUsers(){
  return this.UserList;
 }
}
