import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  

  constructor() { }
  GetData():string{
    return "From Data Provider Service.";
  }
}
