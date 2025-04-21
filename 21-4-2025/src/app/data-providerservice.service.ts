import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderserviceService {

  constructor() { }
  GetData():string{
    return "From DataproviderService";
  }
}
