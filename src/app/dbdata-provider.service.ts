import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderService {

  constructor(private dbCon:DbConnectionService) { super() }
  override GetData(): string {
    this.dbCon.ConnectToDatabase();
    return "From Database data Provider Service."
  }
}
