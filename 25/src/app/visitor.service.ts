import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Visitor } from './visitor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private baseUrl:string = 'http://localhost:3000/visitors'; 

  constructor(private http:HttpClient) { }

  getAllVisitors(): Observable<Visitor[]>{
    return this.http.get<Visitor[]>(this.baseUrl);
  }

  getVisitorById(id:string): Observable<Visitor>{
    return this.http.get<Visitor>(`${this.baseUrl}/${id}`);
  }

  addVisitor(visitor:Visitor): Observable<Visitor>{
    return this.http.post<Visitor>(this.baseUrl,visitor);
  }

  updateVisitor(id:string, visitor: Visitor) : Observable<Visitor>{
    return this.http.put<Visitor>(`${this.baseUrl}/${id}`, visitor);
  }

  deleteVisitor(id:string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getVisitorsBydate(date: string) : Observable<Visitor[]>{
    return this.http.get<Visitor[]>(`${this.baseUrl}?visitingDate=${date}`);
  }
  getVisitorsByHostId(hostId: string) : Observable<Visitor[]>{
    return this.http.get<Visitor[]>(`${this.baseUrl}?hostId=${hostId}`);
  }
}
