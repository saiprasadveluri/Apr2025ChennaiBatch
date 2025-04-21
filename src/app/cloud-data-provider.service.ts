import { Injectable } from '@angular/core';
import { DataProviderServiceService } from './data-provider-service.service';
import { RemoteAccessService } from './remote-access.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService extends DataProviderServiceService {
  //remoteSrv:RemoteAccessService;---->Violating the Solid Principle
  constructor(private remoteSrv:RemoteAccessService) {
    super();
    //this.remoteSrv=new RemoteAccessService();
  }
  override GetData(): string {
    //Access the Remote server using RemoteAccessService() class Object
    this.remoteSrv.ConnectRemoteServer();
    return "From Cloud DataProviderService...Success"
  }
}
