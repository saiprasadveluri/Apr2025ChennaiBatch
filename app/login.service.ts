import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private apiUrl="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`$(this.apiUrl)visitors`);
  }
}
