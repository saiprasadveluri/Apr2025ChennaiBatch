import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitor } from './visitor';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private apiUrl= 'http://localhost:3004/visitors';

  constructor(private http: HttpClient) { }
  getAllVisitors(): Observable<Visitor[]>{
    return this.http.get<Visitor[]>(this.apiUrl);
  }
  getVisitorById(id:string): Observable<Visitor>{
    return this.http.get<Visitor>(`${this.apiUrl}/${id}`);
  }
  getVisitorByDate(date:string): Observable<Visitor>{
    return this.http.get<Visitor>(`${this.apiUrl}?dov=${date}`);
  }
  getVisitorByHost(hostName:string): Observable<Visitor>{
    return this.http.get<Visitor>(`${this.apiUrl}?hostName=${hostName}`);
  }
  addVisitor(visitor:Visitor):Observable<Visitor>{
    return this.http.post<Visitor>(this.apiUrl,visitor);
  }
  deleteVisitor(id:string):Observable<Visitor>{
    return this.http.delete<Visitor>(`${this.apiUrl}/${id}`)
  }
  updateVisitor(visitor:Visitor):Observable<Visitor>{
    return this.http.put<Visitor>(`${this.apiUrl}/${visitor.id}`,visitor)
  }
}
