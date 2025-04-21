import { Injectable } from '@angular/core';
import { DataProviderServiceService } from './data-provider-service.service';
import { DBConnectionService } from './dbconnection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderServiceService{

  constructor(private dbConSrv:DBConnectionService) {
    super();
   }
   override GetData(): string {
    this.dbConSrv.ConnectToDatabase();
     return "From Database DataProvider Service"
   }
}
