import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  private baseUrl='http://localhost:3004/UserInfo';
  public currentUser:any =null;

  constructor(private http:HttpClient,private router: Router) { }

  login(username:string,password:string){

    return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`)
    .pipe(map(UserInfo=>{
      if(UserInfo.length){
        this.currentUser=UserInfo[0];
        localStorage.setItem('user', JSON.stringify(this.currentUser));
          return this.currentUser;
        } else 
        {
          throw new Error('Invalid credentials');
        }
      }));
  }
 
  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
 
  getUser() {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('user')!);
    }
    return this.currentUser;
  }
 
  isManager() {
    return this.getUser()?.role === 'manager';
  }
 
  isHost() {
    return this.getUser()?.role === 'host';
  }
 
  isLoggedIn() {
    return !!this.getUser();
  }
  
}
