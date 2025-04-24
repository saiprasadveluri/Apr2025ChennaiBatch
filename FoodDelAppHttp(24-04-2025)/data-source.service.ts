import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { RestInfo } from './rest-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[]
  restData:RestInfo[]=[]
  baseAddress:string='http://localhost:3004/'
  constructor(private http:HttpClient) { }
  // AddNewUserEntry(data:UserInfo)
  // {
  //   this.UserList.push(data)
  // }
  // GetRestData()
  // {
  //   return this.restData
  // }
  AddNewRestPost(data:RestInfo):Observable<RestInfo>
  {
    return this.http.post(`${this.baseAddress}restaurantInfo`,data)
  }
  AddNewRestEntry(data:RestInfo)
  {
    this.restData.push(data)
  }
  GetRestData():Observable<RestInfo[]>
  {
    return this.http.get<RestInfo[]>(`${this.baseAddress}restaurantInfo`)
  }
  DeleteRest(id:any):Observable<any>
  {
    //url:'http://localhost:3004/restaurantInfo/10'
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`)
  }
  GetRestDataById(id:any):Observable<RestInfo>
  {
    //url:'http://localhost:3004/userInfo/2'
    return this.http.get(`${this.baseAddress}restaurantInfo/${id}`)
  }
  EditRest(inp:RestInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}restaurantInfo/${inp.id}`,inp)
  }

  
  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>
  {
    return this.http.post(`${this.baseAddress}userInfo`,data)
  }
  GetAllUser():Observable<UserInfoNew[]>
  {
    //url:'http://localhost:3004/userInfo'
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`)
  }
  DeleteUser(id:any):Observable<any>
  {
    //url:'http://localhost:3004/userInfo/10'
    return this.http.delete(`${this.baseAddress}userInfo/${id}`)
  }
  GetUserDataById(id:any):Observable<UserInfoNew>
  {
    //url:'http://localhost:3004/userInfo/2'
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }
  EditUser(inp:UserInfoNew):Observable<any>
  {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp)
  }
}
