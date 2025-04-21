import { Injectable } from '@angular/core';
import { DataProviderserviceService } from './data-providerservice.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderserviceService{

  constructor() {
    super();
   }
   override GetData(): string {
     return 'from database data provider service';
   }

}
