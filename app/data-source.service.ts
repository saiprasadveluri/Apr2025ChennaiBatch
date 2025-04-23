import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { RestInfo, RestInfoNew } from './rest-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  RestList: RestInfo[]=[];
  baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient) { }
  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>{
    return this.http.post(`${this.baseAddress}userInfo`,data);
  }
  GetAllUsers():Observable<UserInfoNew[]>{
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`)
  }
  DeleteUser(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }
  GetUserDataById(id:any):Observable<UserInfoNew>{
    return this.http.get(`${this.baseAddress}userInfo/${id}`);
  }
  EditUser(inp:UserInfoNew):Observable<any>{
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp);
  }
  AddNewRestaurantEntry(Rdata:RestInfoNew):Observable<RestInfoNew>{
    return this.http.post(`${this.baseAddress}restaurantInfo`,Rdata);
  }
  GetAllRestaurant():Observable<RestInfoNew[]>{
    return this.http.get<RestInfoNew[]>(`${this.baseAddress}restaurantInfo`)
  }
  DeleteRestaurant(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`);
  }
  GetRestaurantDataById(id:any):Observable<RestInfoNew>{
    return this.http.get(`${this.baseAddress}restaurantInfo/${id}`);
  }
  EditRestaurant(i:RestInfoNew):Observable<any>{
    return this.http.put(`${this.baseAddress}restaurantInfo/${i.id}`,i);
  }
}