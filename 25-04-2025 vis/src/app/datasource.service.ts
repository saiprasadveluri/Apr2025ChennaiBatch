import { Injectable } from '@angular/core';
import { VisitorInfo } from './visitor-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hostinfo } from './hostinfo';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  visitordata:VisitorInfo[]=[];
  Hostdata:Hostinfo[]=[];
baseAddress:string='http://localhost:3004/'
  constructor(private http:HttpClient) { }
  
  AddNewvisitor(visitordata:VisitorInfo):Observable<VisitorInfo>
  {
    return this.http.post(`${this.baseAddress}VisitorInfo`,visitordata);
  }
  GetAllVisitors():Observable<VisitorInfo[]>{
  return this.http.get<VisitorInfo[]>(`${this.baseAddress}VisitorInfo`);
  }
  deleteVisitor(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddress}VisitorInfo/${id}`);
  }
  EditVisitor(inp:VisitorInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}VisitorInfo/${inp.id}`,inp)
  }
  GetVisitorDataById(SelId:string):Observable<any>
  {
    return this.http.get(`${this.baseAddress}VisitorInfo/${SelId}`)
  }
  GetAllHost():Observable<Hostinfo[]>{
    return this.http.get<Hostinfo[]>(`${this.baseAddress}HostInfo`);
    }
    AddNewHost(Hostdata:Hostinfo):Observable<Hostinfo>
  {
    return this.http.post(`${this.baseAddress}HostInfo`,Hostdata);
  }
  GetAllHosts():Observable< Hostinfo[]>{
    return this.http.get<Hostinfo[]>(`${this.baseAddress}HostInfo`);
  }
  deleteHost(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddress}HostInfo/${id}`);
  }
  

}
