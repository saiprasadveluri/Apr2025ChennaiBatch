import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
private apiUrl = 'http://localhost:3004/hosts';
 
  constructor(private http: HttpClient) { }
 
  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?username=${username}&password=${password}`);
  }
}