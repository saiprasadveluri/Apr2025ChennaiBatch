import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, UserInfoNew } from './user-info';
import { RestaurantInfo, RestaurantInfoNew } from './restaurant-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  GetAllUsers() {
    throw new Error('Method not implemented.');
  }

  UserList: UserInfo[] = [];
  UserListNew: UserInfoNew[] = [];
  baseadd: string = "http://localhost:3004/"
  constructor(private http: HttpClient) { }
  AddNewUserentry(data: UserInfoNew): Observable<UserInfoNew> {
    return this.http.post<UserInfoNew>(`${this.baseadd}userInfo`, data);
  }
  getAlluser(): Observable<UserInfoNew[]> {
    return this.http.get<UserInfoNew[]>(`${this.baseadd}userInfo`);
  }
  DeleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseadd}userInfo/${id}`);
  }
  getUserDatabyId(id: any): Observable<UserInfoNew> {
    return this.http.get<UserInfoNew>(`${this.baseadd}userInfo/${id}`);
  }
  EditUser(i: UserInfoNew): Observable<any> {
    return this.http.put<UserInfoNew>(`${this.baseadd}userInfo/${i.id}`, i);
  }

  
  restList: RestaurantInfo[] = [];
  restListNew: RestaurantInfoNew[] = [];

  AddNewRestEntry(d: RestaurantInfoNew) {
    return this.http.post<RestaurantInfoNew>(`${this.baseadd}restaurantInfo`, d);
  }
  getAllRest() {
    return this.http.get<RestaurantInfoNew[]>(`${this.baseadd}restaurantInfo`);
  }
  DeleteRest(id: string): Observable<any> {
    return this.http.delete(`${this.baseadd}restaurantInfo/${id}`);
  }
  EditRest(i: UserInfoNew): Observable<any> {
    return this.http.put<RestaurantInfoNew>(`${this.baseadd}restaurantInfo/${i.id}`, i);

  }
}
