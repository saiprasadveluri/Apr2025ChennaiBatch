import { Injectable, Input } from '@angular/core';
import { UserInfo, USerInfoNew } from './user-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestaurantInfo } from './restaurant-info';
@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
 UserList:USerInfoNew[]=[];
 RestList:RestaurantInfo[]=[];

 baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient ) {

   }
   AddNewUserEntry(data:USerInfoNew):Observable<USerInfoNew>{
     return this.http.post(`${this.baseAddress}userInfo`, data);
   }
   GetAllUsers():Observable<USerInfoNew[]>
   {
    return this.http.get<USerInfoNew[]>(`${this.baseAddress}userInfo`);
   }
   GetUserDataById(id:any):Observable<USerInfoNew>{
    return this.http.get<USerInfoNew>(`${this.baseAddress}userInfo/${id}`);
   }
   DeleteUser(id:any):Observable<any>
   {
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
   }
   EditUser(inp:USerInfoNew):Observable<any>
   {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp);
   }
   AddNewRestaurant(data:RestaurantInfo):Observable<RestaurantInfo>{
    return this.http.post(`${this.baseAddress}restaurantInfo`, data);
   }
    DeleteRestaurant(id:any):Observable<any>
    {
     return this.http.delete(`${this.baseAddress}userInfo/${id}`);
    }
   GetAllRestaurant()
   {
    return this.http.get<RestaurantInfo[]>(`${this.baseAddress}restaurantInfo`);
   }
   EditRestaurant(inp:RestaurantInfo):Observable<any>
   {
    return this.http.put(`${this.baseAddress}restaurantInfo/${inp.id}`,inp);
   }
   GetRestDataById(id:any):Observable<RestaurantInfo>
   {
    return this.http.get<RestaurantInfo>(`${this.baseAddress}restaurantInfo/${id}`);
   }
}
