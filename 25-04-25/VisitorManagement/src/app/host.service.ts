import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Host } from './host';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {
  private apiUrl= 'http://localhost:3004/hosts';

  constructor(private http:HttpClient) { }
  getHost():Observable<Host[]>{
    return this.http.get<Host[]>(this.apiUrl);
  }
  addHost(host:Host): Observable<Host>{
    return this.http.post<Host>(this.apiUrl,host);
  }
}
