import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {
private apiUrl="http://localhost:3000/";
  constructor(private http:HttpClient) {}
  getHosts():Observable<Host[]>{
    return this.http.get<Host[]>(this.apiUrl);
  }
  addHosts(host:any):Observable<Host[]>{
    return this.http.post<Host[]>(this.apiUrl,host);
  }
  deleteHost(hostId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${hostId}`);
  }
}
