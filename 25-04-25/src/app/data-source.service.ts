import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitorInfo } from './visitor-info';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  [x: string]: any;
 
  UserList:VisitorInfo[]=[];
  OwnerList:HostInfo[]=[];
  baseAddress:string='http://localhost:3004/'

  constructor(private http:HttpClient) { }
  AddVisitorEntry(data:VisitorInfo):Observable<VisitorInfo>
  {
    return this.http.post(`${this.baseAddress}visitorInfo`,data);
  }
  GetAllVisitors():Observable<VisitorInfo[]>
  {
    return this.http.get<VisitorInfo[]>(`${this.baseAddress}visitorInfo`);
  }

  GetVisitorDataById(id:any):Observable<VisitorInfo>
  {
    return this.http.get(`${this.baseAddress}visitorInfo/${id}`);
  }

  Deletevisitor(id:any):Observable<any>
  {
    //url format:'http://localhost:3004/userInfo/10
    return this.http.delete(`${this.baseAddress}visitorInfo/${id}`);
  }
  EditUser(inp:VisitorInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp);
  }





  AddNewHostEntry(data:HostInfo):Observable<HostInfo>
  {
    return this.http.post<HostInfo>(`${this.baseAddress}hostInfo`,data);
  }
  GetAllHost():Observable<HostInfo[]>
  {
    return this.http.get<HostInfo[]>(`${this.baseAddress}hostInfo`);
  }

  GetHostDataById(id:any):Observable<HostInfo>
  {
    return this.http.get<HostInfo>(`${this.baseAddress}hostInfo/${id}`);
  }
  DeleteRestaurant(id:any):Observable<any>
  {
    //url format:'http://localhost:3004/userInfo/10
    return this.http.delete(`${this.baseAddress}hostInfo/${id}`);
  }
  EditRestaurant(inp:HostInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}hostInfo/${inp.Id}`,inp);
  }

}

