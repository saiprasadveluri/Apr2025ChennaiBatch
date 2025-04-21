import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderService {

  constructor(private dbconsrv:DbConnectionService) {
    super();
   }
   override GetData(): string {
    this.dbconsrv.ConnectToDatabase();
    return 'From Database Data Provider Service';
   }
  
}
