import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisitorInfo } from './visitor-info';
import { HostInfo } from './host-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  private visitor:VisitorInfo[] = [];
  private hdata:HostInfo[] = [];
   baseadd: string = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  addVisitor(v: VisitorInfo): Observable<VisitorInfo> {
    return this.http.post<VisitorInfo>(`${this.baseadd}visitorInfo`, v);
  } 
  getVisit(): Observable<VisitorInfo[]> {
    return this.http.get<VisitorInfo[]>(`${this.baseadd}visitorInfo`)}
  Delete(id: string) {
    return this.http.delete(`${this.baseadd}visitorInfo/${id}`);
  }

  addHost(h:any){
    return this.http.post<HostInfo>(`${this.baseadd}hostInfo`, h);
  }
  getHost(){
    return this.http.get<HostInfo[]>(`${this.baseadd}hostInfo`);
  }
  Deleteho(id: any) {
    return this.http.delete(`${this.baseadd}hostInfo/${id}`);
  }
}
