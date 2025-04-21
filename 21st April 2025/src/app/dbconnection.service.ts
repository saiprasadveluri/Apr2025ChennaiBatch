import { inject, Inject, Injectable } from '@angular/core';
import { CONNECTION_INFO_TOKEN } from './ConnectionConfig';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DBConnectionService {
  private ConnectionData:ConnectionInfo;

  constructor(@Inject(CONNECTION_INFO_TOKEN) conData:ConnectionInfo) { 
    this.ConnectionData=conData;
  }
  ConnectToDataBase(){
    console.log(`'connection to database..' Server: ${this.ConnectionData.serverName}, portNumber:${this.ConnectionData.portNumber}`);
  }
}
