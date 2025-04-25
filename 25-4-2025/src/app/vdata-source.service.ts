import { Injectable } from '@angular/core';
import { Hostinfo, Visitorinfo } from './vinfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VDataSourceService {
  visitorlist:Visitorinfo[]=[];
  hostlist:Hostinfo[]=[];
  baseAddress:string='http://localhost:3004/'

  constructor(private http:HttpClient) {

   }
   AddNewHostEntry(data:Hostinfo):Observable<Hostinfo>{
    return this.http.post(`${this.baseAddress}HostInfo`,data);
   }
   GetAllHosts():Observable<Hostinfo[]>{
    return this.http.get<Hostinfo[]>(`${this.baseAddress}HostInfo`);
   }
   GetHostDataById(id:any):Observable<Hostinfo>{
    return this.http.get(`${this.baseAddress}HostInfo/${id}`);
   }
   DeleteHost(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddress}HostInfo/${id}`);
   }
   EditHost(inp:Hostinfo):Observable<any>{
    return this.http.put(`${this.baseAddress}HostInfo/${inp.id}`,inp);
   }
   AddNewVisitorEntry(data:Visitorinfo):Observable<Visitorinfo>{
    return this.http.post(`${this.baseAddress}VisitorInfo`,data);
   }
   GetAllVisitors():Observable<Visitorinfo[]>{
    return this.http.get<Visitorinfo[]>(`${this.baseAddress}VisitorInfo`);
   }
   GetVisitorDataById(id:any):Observable<Visitorinfo>{
    return this.http.get(`${this.baseAddress}VisitorInfo/${id}`);
   }
   DeleteVisitor(id:any):Observable<any>{
    return this.http.delete(`${this.baseAddress}VisitorInfo/${id}`);
   }
   EditVisitor(inp:Visitorinfo):Observable<Visitorinfo>{
    return this.http.put(`${this.baseAddress}VisitorInfo/${inp.id}`,inp);
   }
}
