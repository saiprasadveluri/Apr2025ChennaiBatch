import { Injectable } from '@angular/core';
import { Userinfo, UserinfoNew } from './userinfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurantinfo } from './restaurantinfo';

@Injectable({
  providedIn: 'root'
})
export class DataSourseService {
  UserList:Userinfo []=[];
restlist:Restaurantinfo[]=[];

baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient) {

 
 }
 AddNewUserEntry(data:UserinfoNew):Observable<UserinfoNew>{
   return this.http.post(`${this.baseAddress}userInfo`,data);
 }
 GetAllUsers():Observable<UserinfoNew[]>{
  return this.http.get<UserinfoNew[]>(`${this.baseAddress}userInfo`);
 }
 GetUserDataById(id:any):Observable<UserinfoNew>{
  //for url format:http://localhost:3004/userInfo/10
  return this.http.get(`${this.baseAddress}userInfo/${id}`);
 }


 deleteuser(id:any):Observable<any>{
  //for url format:http://localhost:3004/userInfo/10
  return this.http.delete(`${this.baseAddress}userInfo/${id}`);
 }

 EditUser(inp:UserinfoNew):Observable<any>{
  return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp);
 }

 AddNewRestaurant(data:Restaurantinfo):Observable<any>
 {
  this.restlist.push(data);
  return this.http.post(`${this.baseAddress}restaurantInfo`,data);

}
GetAllRestaurant(){
  // return this.restlist
  return this.http.get<Restaurantinfo[]>(`${this.baseAddress}restaurantInfo`);
 }
 deleterestaurant(id:any):Observable<any>{
  //for url format:http://localhost:3004/userInfo/10
  return this.http.delete(`${this.baseAddress}restaurantInfo/${id}`);
 }
 EditRestaurant(inp:Restaurantinfo):Observable<any>{
  return this.http.put(`${this.baseAddress}restaurantInfo/${inp.id}`,inp);
 }
 GetRestDataById(id: any): Observable<Restaurantinfo> {
  return this.http.get<Restaurantinfo>(`${this.baseAddress}restaurantInfo/${id}`);
}



}