import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { RestInfo, RestInfoNew, UserInfoNew } from './rest-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  EditRest(currentRest: RestInfoNew) {
    throw new Error('Method not implemented.');
  }
  // EditUser(currentUser: UserInfoNew) {
  //   throw new Error('Method not implemented.');
  // }
  RestaurentList:RestInfo[]=[];
  
  AddNewRestEntry(RestaurentList:RestInfo) {
    throw new Error('Method not implemented.');
  }
  
  addlist:UserInfo[]=[];
  addlistnew:UserInfoNew[]=[];
  baseAddress:string='http://localhost:3004/';
  GetAllRest: any;

  constructor(private http:HttpClient) { 

  }
  AddNewUserEntry(data:UserInfoNew)
  {
    return this.http.post(`${this.baseAddress}userInfo`,data);
  }
  GetAllUsers():Observable<UserInfoNew[]>
  {
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`)
  }
  GetUserDataId(id:any):Observable<UserInfoNew>
  {
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }
  DeleteUser(id: any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}userInfo/${id}`)
  }
  EditUser(i:UserInfoNew):Observable<any>{
    return this.http.put<UserInfoNew>(`${this.baseAddress}userInfo/${i.id}`,i);
  }

  restList:RestInfo[]=[];
  AddRestEntry(d:RestInfo){
    this.restList.push(d);
  }
  getAllRest(){
    return this.restList;
  }
}
