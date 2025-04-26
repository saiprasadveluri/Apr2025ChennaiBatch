import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hostInfo, visitorInfo } from './user-info';
import { Observable } from 'rxjs';
import { Visitor } from '@angular/compiler';
import { OnSameUrlNavigation } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  hostList:hostInfo[]=[];
  visitorList:visitorInfo[]=[];
  baseAddress:string='http://localhost:3004/';
  constructor(private http:HttpClient) 
  {

  }

  AddNewHostEntry(data:hostInfo):Observable<hostInfo>
  {
    return this.http.post<hostInfo>(`${this.baseAddress}hostInfo`, data);

  }
  AddNewVisitorEntry(data:visitorInfo):Observable<visitorInfo>
  {
    return this.http.post<visitorInfo>(`${this.baseAddress}visitorInfo`, data);
  }
  GetAllHosts():Observable<hostInfo[]>
  {
    return this.http.get<hostInfo[]>(`${this.baseAddress}hostInfo`);
  }
  GetAllVisitors():Observable<visitorInfo[]>
  {
    return this.http.get<visitorInfo[]>(`${this.baseAddress}visitorInfo`);
  }
  GetHostDataById(id:any):Observable<hostInfo>
  {
    return this.http.get<any>(`${this.baseAddress}hostInfo/${id}`);
  }
  GetVisitorDataById(id:any):Observable<visitorInfo>
  {
    return this.http.get<any>(`${this.baseAddress}visitorInfo/${id}`);
  }
  DeleteHost(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}hostInfo/${id}`);
  }
  DeleteVisitor(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}visitorInfo/${id}`);
  }
  EditHost(i:any):Observable<any>
  {
    return this.http.put<hostInfo>(`${this.baseAddress}hostInfo/${i.id}`,i);
  }
  EditVisitor(i:visitorInfo):Observable<any>
  {
    return this.http.put<visitorInfo>(`${this.baseAddress}visitorInfo/${i.id}`,i);
  }
  AddNewVisitor(data: visitorInfo)
  {
    this.visitorList.push(data);
  }
  AddNewHost(data: hostInfo)
  {
    this.hostList.push(data);
  }
}
