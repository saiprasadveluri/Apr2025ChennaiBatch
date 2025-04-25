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
  hostData:HostInfo[]=[];
  baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient) { }
  AddNewVisitorEntry(data:VisitorInfo):Observable<VisitorInfo>{
    return this.http.post<VisitorInfo>(`${this.baseAddress}VisitorInfo`,data);
  }
  GetAllVisitor():Observable<VisitorInfo[]>{
    return this.http.get<VisitorInfo[]>(`${this.baseAddress}VisitorInfo`)
  }
  DeleteVisitor(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}VisitorInfo/${id}`);
  }
  GetVisitorDataById(id:any):Observable<VisitorInfo>{
    return this.http.get<VisitorInfo>(`${this.baseAddress}VisitorInfo/${id}`);
  }
  EditVisitor(inp:VisitorInfo):Observable<any>{
    return this.http.put(`${this.baseAddress}VisitorInfo/${inp.id}`,inp);
  }
  AddNewHostEntry(data:HostInfo):Observable<HostInfo>{
    return this.http.post<HostInfo>(`${this.baseAddress}HostInfo`,data);
  }
  GetAllHost():Observable<HostInfo[]>{
    return this.http.get<HostInfo[]>(`${this.baseAddress}HostInfo`)
  }
  DeleteHost(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}HostInfo/${id}`);
  }
  GetHostDataById(id:any):Observable<HostInfo>{
    return this.http.get<HostInfo>(`${this.baseAddress}HostInfo/${id}`);
  }
  EditHost(inp:HostInfo):Observable<any>{
    return this.http.put(`${this.baseAddress}HostInfo/${inp.id}`,inp);
  }
}
