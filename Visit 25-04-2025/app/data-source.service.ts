import { Injectable } from '@angular/core';
import { VisitorInfo } from './visitor-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  visitorList:VisitorInfo[]=[];
  baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient) { }
  AddVisitor(visitorList:VisitorInfo):Observable<VisitorInfo>
  {
   return this.http.post(`${this.baseAddress}VisitorInfo`,visitorList);
  }
  GetAllVisitors():Observable<VisitorInfo[]>
  {
   return this.http.get<VisitorInfo[]>(`${this.baseAddress}VisitorInfo`);
  }
  DeleteVisitor(id:any):Observable<any>
   {
    return this.http.delete(`${this.baseAddress}VisitorInfo/${id}`);
   }
   GetVisitorDataById(id:any):Observable<any>
   {
    return this.http.get<VisitorInfo>(`${this.baseAddress}VisitorInfo/${id}`);
   }
   EditVisitor(inp:VisitorInfo):Observable<any>
   {
    return this.http.put(`${this.baseAddress}VisitorInfo/${inp.id}`,inp);
   }
   AddHost(HostData:HostInfo):Observable<any>
   {
    return this.http.post(`${this.baseAddress}HostInfo`,HostData);
   }
   DeleteHost(id:any):Observable<any>
   {
    return this.http.delete(`${this.baseAddress}HostInfo/${id}`);
   }
   GetAllHost():Observable<HostInfo[]>
   {
    return this.http.get<HostInfo[]>(`${this.baseAddress}HostInfo`);
   }
  
}
