import { Injectable } from '@angular/core';
import { VisitorInfo } from './visitor-info';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

 visitordata:VisitorInfo[]=[];
  hostdata:HostInfo[]=[];

  baseAddress:string='http://localhost:3004/'
  constructor(private http:HttpClient) { }

  AddNewvisitor(data:VisitorInfo ):Observable<VisitorInfo>{
    return this.http.post(`${this.baseAddress}VisitorId`,data);
  }
  GetAllvisitors():Observable<VisitorInfo[]>{
   return this.http.get<VisitorInfo[]>(`${this.baseAddress}VisitorId`);
  }
  deletevisitor(id:any):Observable<any>{
    //for url format:http://localhost:3004/userInfo/10
    return this.http.delete(`${this.baseAddress}VisitorId/${id}`);
   }
   editvisitor(inp:VisitorInfo):Observable<any>{
    return this.http.put(`${this.baseAddress}VisitorId/${inp.id}`,inp);
   }
   GetvisitorDataById(id: any): Observable<VisitorInfo> {
    return this.http.get<VisitorInfo>(`${this.baseAddress}VisitorId/${id}`);
  }

deletehost(id:any):Observable<any>{
  //for url format:http://localhost:3004/userInfo/10
  return this.http.delete(`${this.baseAddress}Hostinfo/${id}`);
 }
 AddNewhost(data:HostInfo ):Observable<HostInfo>{
  return this.http.post<HostInfo>(`${this.baseAddress}Hostinfo`,data);
}
GetAllhost():Observable<HostInfo[]>{
  return this.http.get<HostInfo[]>(`${this.baseAddress}Hostinfo`);
 }
}
