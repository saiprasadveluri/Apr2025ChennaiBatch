import { Injectable } from '@angular/core';
import { visitorlist } from './userinfo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})






export class hosservice{
  userList:visitorlist[]=[];
  userinfo: visitorlist|undefined;

  constructor(private http:HttpClient){ }
  url:string ="http://localhost:3004/visitors";

  getUserList(): Observable<visitorlist[]> {
    return this.http.get<visitorlist[]>(this.url);
  }
  adduser(visitorData:):Observable<visitorlist>{
    return this.http.post<visitorlist>(this.url,visitorData);
  }

  deleteUser(visitorData: visitorlist): Observable<visitorlist>{
    return this.http.delete<visitorlist>(this.url + "/" + visi.id);
  }
  selectedUser(visitorData : visitorlist): Observable<visitorlist>{
    return this.http.get<visitorlist>(this.url + "/" + visi.id);
  }
  updateUser(visitorData : visitorlist): Observable<visitorlist>{
    return this.http.put<visitorlist>(this.url + "/" + visi.id , visi);
  }
}