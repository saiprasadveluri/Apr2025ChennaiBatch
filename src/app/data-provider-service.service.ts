import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderServiceService {

  constructor() { }
  GetData():string{
    return "From DataProviderService"
  }
}
