import { Injectable } from '@angular/core';
import { VisitorInfo, VisitorInfoNew } from './visitor-info';
import { HostInfo, HostInfoNew } from './host-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  VisitorList:VisitorInfo[]=[];
  HostList:HostInfoNew[]=[];
  baseAddress:string='http://localhost:3004/';
  
  constructor(private http:HttpClient)
  { 

  }


  AddNewVisitorEntry(data:VisitorInfoNew):Observable<VisitorInfoNew>
  {
    return this.http.post(`${this.baseAddress}visitorInfo`,data);
  }


  GetAllVisitors():Observable<VisitorInfoNew[]>
  {
    return this.http.get<VisitorInfoNew[]>(`${this.baseAddress}visitorInfo`);
  }


  GetVisitorDataById(id:any):Observable<VisitorInfoNew>
  {
    return this.http.get(`${this.baseAddress}visitorInfo/${id}`)
  }


  DeleteVisitor(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseAddress}visitorInfo/${id}`);
  }


  EditVisitor(i: VisitorInfoNew):Observable<any>
  {
    return this.http.put<VisitorInfoNew>(`${this.baseAddress}visitorInfo/${i.id}`,i);
  }


  AddNewHostEntries(RData:HostInfoNew):Observable<HostInfoNew>{
    return this.http.post(`${this.baseAddress}hostInfo`,RData);
  }


  GetAllHosts():Observable<HostInfoNew[]>{
    return this.http.get<HostInfoNew[]>(`${this.baseAddress}hostInfo`);
  }

  
  GetHostById(id:any):Observable<HostInfoNew>
  {
    return this.http.get(`${this.baseAddress}hostInfo/${id}`);
  }
  DeleteHost(id:string):Observable<any>{
    return this.http.delete(`${this.baseAddress}hostInfo/${id}`);
  }
  EditHost(i: HostInfoNew):Observable<any>{
    return this.http.put<HostInfoNew>(`${this.baseAddress}hostInfo/${i.id}`,i);
  }

}
