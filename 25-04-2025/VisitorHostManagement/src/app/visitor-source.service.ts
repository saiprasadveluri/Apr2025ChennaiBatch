import { Injectable } from '@angular/core';
import { VisitorInfo } from './visitor-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class VisitorSourceService {
  VisitorData:VisitorInfo[]=[]
  HostData:HostInfo[]=[]
  baseAddress:string="http://localhost:3004/"
  constructor(private http:HttpClient ){
    
  }
  AddNewVisitorEntry(data:VisitorInfo):Observable<VisitorInfo>{
    return this.http.post<VisitorInfo>(`${this.baseAddress}visitor`,data)
  }
  AddNewHostEntry(data:HostInfo):Observable<HostInfo>{
    return this.http.post(`${this.baseAddress}host`,data)
  }
  GetAllVisitors():Observable<VisitorInfo[]>{
    return this.http.get<VisitorInfo[]>(`${this.baseAddress}visitor`)
  }
  GetAllHosts():Observable<HostInfo[]>{
    return this.http.get<HostInfo[]>(`${this.baseAddress}host`)
  }
  GetVisitorDataById(id:any):Observable<VisitorInfo>{
    //url format http://localhost:3004/userInfo/id
    return this.http.get<VisitorInfo>(`${this.baseAddress}visitor/${id}`)
  }
  DeleteVisitor(id:any):Observable<any>{
    //url format http://localhost:3004/visitor/id
    return this.http.delete(`${this.baseAddress}visitor/${id}`);
  }
  DeleteHost(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddress}host/${id}`);
  }
  EditVisitor(input:VisitorInfo):Observable<any>{
    return this.http.put(`${this.baseAddress}visitor/${input.id}`,input)
  }
}
