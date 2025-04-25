import { Injectable } from '@angular/core';
import { VisitorInfo } from './visitor-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  
  visitorData:VisitorInfo[]=[];

  baseAddress:string="http://localhost:3004/"
  constructor(private http: HttpClient) { 
    
  }
  GetAllHosts():Observable<HostInfo[]>{
    return this.http.get<HostInfo[]>(`${this.baseAddress}hostInfo`);
  }
  GetAllVisitors():Observable<VisitorInfo[]>{
    return this.http.get<VisitorInfo[]>(`${this.baseAddress}visitorInfo`);
  }
  AddNewVisitorEntry(data:VisitorInfo):Observable<VisitorInfo>{
    return this.http.post<VisitorInfo>(`${this.baseAddress}visitorInfo`, data);
  }
  DeleteVisitor(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}visitorInfo/${id}`);
  }
  GetUserDataById(id:any):Observable<VisitorInfo>{
    return this.http.get<VisitorInfo>(`${this.baseAddress}visitorInfo/${id}`);
  }
  EditVisitor(inp:VisitorInfo):Observable<any>{
    return this.http.put(`${this.baseAddress}visitorInfo/${inp.id}`,inp);
  }
  DeleteHost(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}hostInfo/${id}`);
  }

  EditHost(inp:HostInfo):Observable<any>{
    return this.http.put(`${this.baseAddress}hostInfo/${inp.id}`,inp);
  }
  GetHostDataById(id:any):Observable<HostInfo>{
    return this.http.get<HostInfo>(`${this.baseAddress}hostInfo/${id}`);
  }
  AddNewHostEntry(data:HostInfo):Observable<HostInfo>{
    return this.http.post<HostInfo>(`${this.baseAddress}hostInfo`, data);
  }
  

  
}
