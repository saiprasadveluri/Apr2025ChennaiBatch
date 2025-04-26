import { Injectable } from '@angular/core';
import { VistorInfo } from './vistor-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostInfo } from './host-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
vistData:VistorInfo[]=[]
baseAddress:string='http://localhost:3004/'
  constructor(private http:HttpClient) 
  {

   }
   AddNewVistEntry(vistData:VistorInfo):Observable<VistorInfo>
   {
    return this.http.post(`${this.baseAddress}Visitors`,vistData)
   }
   GetAllVist():Observable<VistorInfo[]>
   {
    return this.http.get<VistorInfo[]>(`${this.baseAddress}Visitors`)
   }
   DeleteVist(id:any):Observable<any>
  {
    //Url Format:http://localhost:3004/Visitors
    return this.http.delete(`${this.baseAddress}Visitors/${id}`)
  }
  EditVist(inp:VistorInfo):Observable<any>
  {
    return this.http.put(`${this.baseAddress}Visitors/${inp.id}`,inp)
  }


  AddHostEntry(hostData:HostInfo):Observable<any>
  {
    return this.http.post<any>(`${this.baseAddress}Host`,hostData)
  }
  GetHostData():Observable<HostInfo[]>
 {
   return this.http.get<HostInfo[]>(`${this.baseAddress}Host`)
 }
 DeleteHost(id:any):Observable<any>
 {
  return this.http.delete<any>(`${this.baseAddress}Host/${id}`)
 }
}
