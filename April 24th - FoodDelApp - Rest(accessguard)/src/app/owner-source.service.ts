import { Injectable } from '@angular/core';
import { OwnerInfo } from './owner-info';
import { RestaurantInfo } from './restaurant-info';

@Injectable({
  providedIn: 'root'
})
export class OwnerSourceService {
  OwnerList:OwnerInfo[]=[];
  //RestList:RestaurantInfo[]=[]

  constructor() { }
  AddNewOwnerEntry(oData:OwnerInfo){
    this.OwnerList.push(oData);
  }
  GetAllOwner(){
    return this.OwnerList;
  }
}
