import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBConnectionService {

  constructor() { }
  ConnectToDataBase(){
    console.log('connection to DB successfull');
  }
}
