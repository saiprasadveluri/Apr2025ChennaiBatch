import { Inject, Injectable } from '@angular/core';
import { CONNECTION_INFO_TOKEN } from './connectionConfig';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {

  private connectionData:ConnectionInfo;
  constructor(@Inject(CONNECTION_INFO_TOKEN)conData:ConnectionInfo)
  { 
      this.connectionData=conData;
  }

  ConnectToDatabase()
  {
    console.log(`Connetcing to Database..Server: ${this.connectionData.serverName} - Port Number: ${this.connectionData.portNumber}`);
  }
}
