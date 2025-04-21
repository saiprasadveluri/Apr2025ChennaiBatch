import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { DBConnectionService } from './dbconnection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderService{

  constructor(private dbSrv:DBConnectionService) {
    super();
  }
  override GetData(): string {
    this.dbSrv.ConnectToDataBase();
    return 'From Database DataProvider service success';
  }
}
