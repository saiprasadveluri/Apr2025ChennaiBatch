import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostInfo, VisitorInfo } from './vm-info';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  

  private baseUrl='http://localhost:3004/VisitorsInfo';

  constructor(private http:HttpClient) { }

  getVisitors(): Observable<VisitorInfo[]> {
    return this.http.get<VisitorInfo[]>(this.baseUrl);
  }

  deleteVisitor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  addVisitor(visitor: VisitorInfo): Observable<VisitorInfo> {
    return this.http.post<VisitorInfo>(this.baseUrl, visitor);
  }

  getHosts(): Observable<HostInfo[]> {
    return this.http.get<HostInfo[]>('http://localhost:3004/HostInfo');
  }

}


