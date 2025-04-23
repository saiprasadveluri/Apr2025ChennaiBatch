import { Injectable, OnInit } from '@angular/core';
import { RestInfo, RestInfoNew, UserInfoNew } from './rest-info';
import { UserInfo } from './user-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RDataSourceService implements OnInit{

  
  addrestautrent:RestInfo[]=[];
  
  
  Restlist:RestInfo[]=[];
    Restlistnew:UserInfoNew[]=[];
    baseAddress1:string='http://localhost:3004/';
    
  
    constructor(private http:HttpClient) { 
  
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    AddNewRestEntry(data:RestInfoNew)
    {
      return this.http.post(`${this.baseAddress1}restaurantInfo`,data);
    }
    GetAllRest():Observable<RestInfoNew[]>
    {
      return this.http.get<RestInfoNew[]>(`${this.baseAddress1}restaurantInfo`)
    }
    GetRestDataId(id:any):Observable<RestInfoNew>
    {
      return this.http.get(`${this.baseAddress1}restaurantInfo/${id}`)
    }
    DeleteRest(id: any):Observable<any>
    {
      return this.http.delete(`${this.baseAddress1}restaurantInfo/${id}`)
    }
    EditRest(i:RestInfoNew):Observable<any>{
      return this.http.put<RestInfoNew>(`${this.baseAddress1}restaurantInfo/${i.id}`,i);
    }
  
    restList:RestInfo[]=[];
    AddRestEntry(d:RestInfoNew){
      return this.http.post(`${this.baseAddress1}restaurantInfo`,d);
    }
    getAllRest(){
      return this.restList;
    }
  }
  

//done
//done