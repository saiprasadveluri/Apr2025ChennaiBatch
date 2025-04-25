import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestInfo, RestInfoNew } from './rest-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  restData:RestInfo[]=[]
  UserList:UserInfo[]=[]
  baseAddress:string='http://localhost:3004/'
  constructor(private http:HttpClient) {

   }
   AddNewRestPost(data:RestInfoNew):Observable<RestInfoNew>
   {
    return this.http.post(`${this.baseAddress}restaurantInfo`,data)
   }
   AddNewRestEntry(data:RestInfoNew)
   {
     this.restData.push
   }
   GetRestData():Observable<RestInfoNew[]>
  {
    return this.http.get<RestInfoNew[]>(`${this.baseAddress}restaurantInfo`)
  }
  DeleteRest(id:any):Observable<RestInfoNew>
  {
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`)
  }
  
   AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>
   {
    return this.http.post(`${this.baseAddress}userInfo`,data)
   }
   GetAllUser():Observable<UserInfoNew[]>
   {
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`)
   }
  DeleteUser(id:any):Observable<any>
  {
    //Url Format:http://localhost:3004/userInfo
    return this.http.delete(`${this.baseAddress}userInfo/${id}`)
  }
  GetUserDataById(id:any):Observable<UserInfoNew>
  {
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }
  EditUser(inp:UserInfoNew):Observable<any>
  {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp)
  }

}
