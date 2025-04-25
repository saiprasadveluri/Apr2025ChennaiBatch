import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HostInfo } from './vm-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  private baseUrl='http://localhost:3004/HostInfo';

  constructor(private http:HttpClient) {

   }

   getHosts(): Observable<HostInfo[]> {
    return this.http.get<HostInfo[]>(this.baseUrl);
   }

   deleteHost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

  addHost(host: HostInfo): Observable<HostInfo> {
    return this.http.post<HostInfo>(this.baseUrl, host);
      }
        
  updateHost(id: string, host: HostInfo): Observable<HostInfo> {
   return this.http.put<HostInfo>(`${this.baseUrl}/${id}`, host);
  }


}



// export class HostService {
//     private baseUrl = 'http://localhost:3004/HostInfo';
  
//     constructor(private http: HttpClient) {}
  
//     getHosts(): Observable<HostInfo[]> {
//       return this.http.get<HostInfo[]>(this.baseUrl);
//     }
  
//     deleteHost(id: number): Observable<void> {
//       return this.http.delete<void>(`${this.baseUrl}/${id}`);
//     }
  
//     addHost(host: HostInfo): Observable<HostInfo> {
//       return this.http.post<HostInfo>(this.baseUrl, host);
//     }
  
//     updateHost(id: number, host: HostInfo): Observable<HostInfo> {
//       return this.http.put<HostInfo>(`${this.baseUrl}/${id}`, host);
//     }
//   }
  
