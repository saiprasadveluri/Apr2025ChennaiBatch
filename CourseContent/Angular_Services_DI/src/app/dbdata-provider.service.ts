import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderService
{
  constructor(private dbconSrv:DbConnectionService) 
  { 
    super();
  }
  override GetData():string
  {
    this.dbconSrv.ConnectToDatabase();
    return 'From Database DataProvider service';
  }
}
