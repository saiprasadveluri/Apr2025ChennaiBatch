import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { RestInfo } from './rest-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  [x: string]: any;
 
  UserList:UserInfo[]=[];
  OwnerList:RestInfo[]=[];
  baseAddress:string='http://localhost:3004/'
  
  
  constructor(private http:HttpClient) {
    
   }
  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>
  {
    return this.http.post(`${this.baseAddress}userInfo`,data);
  }
  GetAllUsers():Observable<UserInfoNew[]>
  {
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`);
  }

  GetUserDataById(id:any):Observable<UserInfoNew>
  {
    return this.http.get(`${this.baseAddress}userInfo/${id}`);
  }

  DeleteUser(id:any):Observable<any>
  {
    //url format:'http://localhost:3004/userInfo/10
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }
  EditUser(inp:UserInfoNew):Observable<any>
  {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp);
  }





  AddNewRestEntry(data:RestInfo):Observable<RestInfo>
  {
    return this.http.post(`${this.baseAddress}restaurantInfo`,data);
  }
  GetAllRest():Observable<RestInfo[]>
  {
    return this.http.get<RestInfo[]>(`${this.baseAddress}restaurantInfo`);
  }

  GetRestDataById(id:any):Observable<RestInfo>
  {
    return this.http.get(`${this.baseAddress}restaurantInfo/${id}`);
  }
  DeleteRestaurant(id:any):Observable<any>
  {
    //url format:'http://localhost:3004/userInfo/10
    return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`);
  }
  EditRestaurant(inp:RestInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}restaurantInfo/${inp.id}`,inp);
  }

}
