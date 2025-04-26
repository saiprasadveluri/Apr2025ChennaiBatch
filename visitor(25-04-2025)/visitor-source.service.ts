import { Injectable } from '@angular/core';
import { VisitInfo } from './visit-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class VisitorSourceService {
  visitData:VisitInfo[]=[]
  baseAddress:string='http://localhost:3004/'
  constructor(private http:HttpClient) { 
    
  }
  AddNewHost(data:HostInfo):Observable<HostInfo>
  {
    return this.http.post(`${this.baseAddress}host`,data)
  }
  GetAllHostData():Observable<HostInfo[]>
  {
    return this.http.get<HostInfo[]>(`${this.baseAddress}host`)
  }
  GetHostById(id:any):Observable<HostInfo>
  {
    return this.http.get(`${this.baseAddress}host/${id}`)
  }
  DeleteHost(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}host`)
  }


  AddNewVisitor(data:VisitInfo):Observable<VisitInfo>
  {
    return this.http.post(`${this.baseAddress}visitors`,data)
  }
  GetAllVisitData():Observable<VisitInfo[]>
  {
    return this.http.get<VisitInfo[]>(`${this.baseAddress}visitors`)
  }
  DeleteVisit(id:any):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}visitors/${id}`)
  }
  EditVisit(inp:VisitInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}visitors/${inp.id}`,inp)
  }
  GetVisitById(id:any):Observable<VisitInfo>
  {
    return this.http.get(`${this.baseAddress}visitors/${id}`)
  }
}
