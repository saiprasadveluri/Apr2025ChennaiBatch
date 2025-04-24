import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { RestaurantInfo } from './restaurant-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  RestaurantList:RestaurantInfo[]=[];
  baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient) 
  {

  }
  



  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>
  {
    return this.http.post(`${this.baseAddress}userInfo`,data);
  }

  AddNewRestaurantEntry(data:RestaurantInfo):Observable<RestaurantInfo>
  {
    return this.http.post(`${this.baseAddress}restaurantInfo`,data);
  }

  GetAllUsers():Observable<UserInfoNew[]>
  {
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`);
  }

  GetAllRestaurants():Observable<RestaurantInfo[]>
  {
    return this.http.get<RestaurantInfo[]>(`${this.baseAddress}restaurantInfo`);
  }

  GetUserDataById(id:any):Observable<UserInfoNew>
  {
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }

  DeleteUser(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }

  AddNewRestaurant(data:RestaurantInfo)
  {
    this.RestaurantList.push(data);
  }

  GetRestaurantDataById(id:any):Observable<RestaurantInfo>
  {
    return this.http.get(`${this.baseAddress}restaurantInfo/${id}`)
  }

 
  EditUser(i:UserInfoNew):Observable<any>{
    return this.http.put<UserInfoNew>(`${this.baseAddress}userInfo/${i.id}`,i);
  }

  EditRestaurant(i:RestaurantInfo):Observable<any>{
    return this.http.put<RestaurantInfo>(`${this.baseAddress}restaurantInfo/${i.id}`,i)
  }

  DeleteRestaurant(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`);
  }

}
