import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { RemoteAccessService } from './remote-access.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService  extends DataProviderService{
 // remoteSrv:RemoteAccessService;
  constructor(private remoteSrv:RemoteAccessService) { 
    super();
    // this.remoteSrv=new RemoteAccessService();
  }
 override GetData():string{
  this.remoteSrv.ConnectRemoteServer();
    return "From Cloud Data Provider Service";
  }
}
