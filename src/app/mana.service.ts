import { Injectable } from '@angular/core';
import { visitors} from './userinfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class hosservice{
  userList:visitors[]=[];
  userinfo: visitors|undefined;

  constructor(private http:HttpClient){ }
  url:string ="http://localhost:3004/visitors";

  getUserList(): Observable<visitors[]> {
    return this.http.get<visitors[]>(this.url);
  }
  adduser(userData:visitors):Observable<visitors>{
    return this.http.post<visitors>(this.url,userData);
  }

  deleteUser(userdata : visitors): Observable<visitors>{
    return this.http.delete<visitors>(this.url + "/" + userdata.id);
  }
  selectedUser(userdata : visitors): Observable<visitors>{
    return this.http.get<visitors>(this.url + "/" + userdata.id);
  }
  updateUser(userdata : visitors): Observable<visitors>{
    return this.http.put<visitors>(this.url + "/" + userdata.id , userdata);
  }
}