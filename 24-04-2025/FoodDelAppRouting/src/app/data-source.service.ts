import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { RestInfo } from './rest-into';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  RestList:RestInfo []=[];
  baseAddress:string="http://localhost:3004/"
  constructor(private http:HttpClient) {

   }
  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>{
    return this.http.post(`${this.baseAddress}userInfo`,data)
  }
  AddNewRestEntry(data:RestInfo):Observable<RestInfo>{
    return this.http.post(`${this.baseAddress}restaurantInfo`,data)
  }
  GetAllUsers():Observable<UserInfoNew[]>{
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`)
  }
  GetUserDataById(id:any):Observable<UserInfoNew>{
    //url format http://localhost:3004/userInfo/id
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }
   GetRestById(id:any):Observable<RestInfo>{
    //url format http://localhost:3004/userInfo/id
    return this.http.get(`${this.baseAddress}restaurantInfo/${id}`)
  }
  GetAllRests():Observable<RestInfo[]>{
    return this.http.get<RestInfo[]>(`${this.baseAddress}restaurantInfo`)
  }
  DeleteUser(id:any):Observable<any>{
    //url format http://localhost:3004/userInfo/id
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }
  DeleteRest(id:any):Observable<any>{
    //url format http://localhost:3004/userInfo/id
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`);
  }
  EditUser(inp:UserInfoNew):Observable<any>
  {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp)
  }
  EditRest(inp:RestInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}restaurantInfo/${inp.id}`,inp)
  }
}
