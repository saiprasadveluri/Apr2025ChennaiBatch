import { Injectable } from '@angular/core';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }
  GetData():string{   
    return "From DataProviderService";
  }
}
