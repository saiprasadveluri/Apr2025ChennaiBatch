import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantInfoNew } from './restaurant-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  RestList:RestaurantInfoNew[]=[];
  baseAddress:string='http://localhost:3004/';
  GetallRestaurants: any;
  
  constructor(private http:HttpClient) { 

  }
  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>{
    return this.http.post(`${this.baseAddress}userInfo`,data);
  }
  GetAllUsers():Observable<UserInfoNew[]>{
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`);
  }
  GetUserDataById(id:any):Observable<UserInfoNew>
  {
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }
  DeleteUser(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }
  EditUser(i: UserInfoNew):Observable<any>{
    return this.http.put<UserInfoNew>(`${this.baseAddress}userInfo/${i.id}`,i);
  }
  AddNewRestEntries(RData:RestaurantInfoNew):Observable<RestaurantInfoNew>{
    return this.http.post(`${this.baseAddress}restaurantInfo`,RData);
  }
  GetAllRests():Observable<RestaurantInfoNew[]>{
    return this.http.get<RestaurantInfoNew[]>(`${this.baseAddress}restaurantInfo`);
  }
  GetRestById(id:any):Observable<RestaurantInfoNew>
  {
    return this.http.get(`${this.baseAddress}restaurantInfo/${id}`);
  }
  DeleteRest(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`);
  }
  EditRest(i: RestaurantInfoNew):Observable<any>{
    return this.http.put<RestaurantInfoNew>(`${this.baseAddress}restaurantInfo/${i.id}`,i);
  }
  
}