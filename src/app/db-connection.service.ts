import { Inject, Injectable } from '@angular/core';
import { Connection_Info_token } from './connectionConfig';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {
  private connectionData:ConnectionInfo;
  constructor(@Inject(Connection_Info_token) conData:ConnectionInfo) { 
    this.connectionData=conData;
  }
  ConnectToDatabase() {
    console.log(`Connecting to Database..' Server:${this.connectionData.serverName}, portNumber:${this.connectionData.portNumber},loginname:${this.connectionData.loginName},password:${this.connectionData.password}`);
  }

 
}
