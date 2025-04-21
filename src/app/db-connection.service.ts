import { Inject, Injectable } from '@angular/core';
import { ConnectInfoToken } from './connection.config';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {
  private ConnectionData: ConnectionInfo;
  constructor(@Inject(ConnectInfoToken) conData: ConnectionInfo) {
    this.ConnectionData=conData;
   }
  ConnectToDatabase() {
    console.log(`'Connecting to DataBase...' Server:${this.ConnectionData.serviceName}, portNumber:${this.ConnectionData.portNumber}`);
  }

  
}


