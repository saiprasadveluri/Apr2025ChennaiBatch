import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Visitor } from './visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorServicesComponent {
private apiUrl="http://localhost:3000/visitors";
constructor(private http:HttpClient){}
getVisitors():Observable<Visitor[]>{
  return this.http.get<Visitor[]>(this.apiUrl);
}
addVisitor(visitor:Visitor):Observable<Visitor>{
  return this.http.post<Visitor>(this.apiUrl,visitor);
}
// updateVisitor(visitorId:number,visitor:any):Observable<any>{
//   return this.http.put<Visitor>('${this.apiUrl}/${visitorId}',visitor);
// }
deleteVisitor(visitorId:number):Observable<void>{
  return this.http.delete<void>('${this.apiUrl}/${visitorId}');
}
}

