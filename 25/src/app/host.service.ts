import {  Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Host } from './host';
@Injectable({
  providedIn: 'root'
})
export class HostService {
   private baseUrl:string = 'http://localhost:3000/hosts'; 
  constructor(private http:HttpClient) { }

  getAllHosts(): Observable<Host[]>{
    return this.http.get<Host[]>(this.baseUrl);  
  }

  getHostByid(id:string): Observable<Host>{
    return this.http.get<Host>(`${this.baseUrl}/${id}`);
  }

  addHost(host:Host): Observable<Host>{
    return this.http.post<Host>(this.baseUrl, host);
  }

  login(username:string, password:string) : Observable<Host[]>{
    return this.http.get<Host[]>(`${this.baseUrl}?username=${username} &password=${password}`);
  }
}
