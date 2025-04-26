import { Injectable } from '@angular/core';
import { VisitorInfo } from './visitor-info';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HostInfo } from './host-info';

@Injectable({
  providedIn:'root'
})
export class DatasourceServiceService {
 
  visitordata:VisitorInfo[]=[];
  hostdata:HostInfo[]=[];


   baseAddres:string='http://localhost:3004/'
  constructor(private http:HttpClient) { }
  AddNewVisitor(visit:VisitorInfo):Observable<VisitorInfo>{
    return this.http.post(`${this.baseAddres}Visitor`,visit);
  }
  GetAllVisitors():Observable<VisitorInfo[]>{
   return this.http.get<VisitorInfo[]>(`${this.baseAddres}Visitor`);
  }
  deletevisitor(id:any):Observable<any>{
    //for url format:http://localhost:3004/VisitorInfo/10
    return this.http.delete(`${this.baseAddres}Visitor/${id}`);
   }
   EditVisitor(inp:VisitorInfo):Observable<any>{
    return this.http.put(`${this.baseAddres}Visitor/${inp.id}`,inp);
   }
 
   GetvisitorDataById(id: any): Observable<VisitorInfo> {
    return this.http.get<VisitorInfo>(`${this.baseAddres}Visitor/${id}`);
  }
  GetAllHosts():Observable<HostInfo[]>{
    return this.http.get<HostInfo[]>(`${this.baseAddres}HostInfo`);
  }
  deletehost(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddres}HostInfo/${id}`);
   }
   AddNewHost(hostdata:HostInfo):Observable<HostInfo>{
    return this.http.post(`${this.baseAddres}HostInfo`,hostdata);
   }
  

}
