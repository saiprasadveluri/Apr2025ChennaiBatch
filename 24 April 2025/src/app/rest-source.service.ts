import { Injectable } from '@angular/core';
import { RestaurantInfo } from './restaurant-info';

@Injectable({
  providedIn: 'root'
})

export class RestSourceService {
  RestList:RestaurantInfo[]=[];

  constructor() { }
    AddNewRestEntry(rData:RestaurantInfo){
       this.RestList.push(rData);
   }
   GetAllRest(){
     return this.RestList;
   }
}


