import { Inject, Injectable } from '@angular/core';
import { CONNECTION_INFO_TOKEN } from './ConnectionConfig';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DBConnectionService {
  private ConnectionData: ConnectionInfo;
  
  constructor(@Inject(CONNECTION_INFO_TOKEN)conData:ConnectionInfo){
    this.ConnectionData=conData;
  }
  ConnectToDatabase(){
    console.log(`Connecting to the Database Server: ${this.ConnectionData.serverName} - Port Number:${this.ConnectionData.portNumber} - Login Name:${this.ConnectionData.loginName} - Password:${this.ConnectionData.password}`);
    
  }
}
