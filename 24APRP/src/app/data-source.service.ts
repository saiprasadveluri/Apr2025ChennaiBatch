import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { HotelInfo } from './hotel-info';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  userList:UserInfo[]=[];
  hotelList:HotelInfo[] = [];
  constructor() { }

  AddNewUserEntry(data:UserInfo){
    this.userList.push(data);
  }
  AddNewHotelEntry(data:HotelInfo){
    this.hotelList.push(data);
  }

  GetAllUsers(){
    return this.userList;
  }

  GetAllHotel(){

    return this.hotelList;
  }
}
