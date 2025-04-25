import { Injectable } from '@angular/core';
 import { HostInfo, VisitorInfo } from './visitor-info';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 
 @Injectable({
   providedIn: 'root'
 })
 export class DataSourceService {
   VisitorList:VisitorInfo[]=[];
   HostList:HostInfo[]=[];
   baseAddress:string='http://localhost:3004/';
 
   constructor(private http:HttpClient) {
 
    }
   AddNewHostEntry(data:HostInfo):Observable<HostInfo>{
     return this.http.post(`${this.baseAddress}hostInfo`,data);
   }
   GetAllHosts():Observable<HostInfo[]>{
     return this.http.get<HostInfo[]>(`${this.baseAddress}hostInfo`);
   }
   GetHostDataById(id:any):Observable<HostInfo>
   {
     return this.http.get(`${this.baseAddress}hostInfo/${id}`);
   }
   DeleteHost(id:string):Observable<any>{
     return this.http.delete(`${this.baseAddress}hostInfo/${id}`);
   }
   EditHost(i:HostInfo):Observable<any>{
     return this.http.put<HostInfo>(`${this.baseAddress}hostInfo/${i.id}`,i);
   }
   AddNewVisitorEntry(data:VisitorInfo):Observable<VisitorInfo>{
     return this.http.post(`${this.baseAddress}visitorInfo`,data);
   }
   GetAllVisitors():Observable<VisitorInfo[]>{
     return this.http.get<VisitorInfo[]>(`${this.baseAddress}visitorInfo`);
   }
   GetVisitorById(id:any):Observable<any>{
     return this.http.get(`${this.baseAddress}visitorInfo/${id}`);
   }
   DeleteVisitor(id:string):Observable<any>{
     return this.http.delete(`${this.baseAddress}visitorInfo/${id}`);
   }
   EditVisitor(i:VisitorInfo):Observable<any>{
     return this.http.put<VisitorInfo>(`${this.baseAddress}visitorInfo/${i.id}`,i);
   }
 
 }