import { Injectable } from '@angular/core';
import { DataProviderserviceService } from './data-providerservice.service';
import { RemoteAccessService } from './remote-access.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataServiceService extends DataProviderserviceService{

  //remoteSrv:RemoteAccessService;
  constructor(private remoteSrv:RemoteAccessService) {
    super();
    this.remoteSrv=new RemoteAccessService();
   }
   override GetData(): string {
    //access the remote serverusing RemoteAccessService() class object;
    this.remoteSrv.ConnectRemoteServer();
     return 'from cloudprovider service';
   }
}
