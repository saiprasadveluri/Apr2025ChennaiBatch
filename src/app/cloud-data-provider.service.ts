import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { RemoteAccessService } from './remote-access.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService extends DataProviderService {
  constructor(private remServ:RemoteAccessService) {  
    super();
  }

  override GetData():string{
    this.remServ.connectRemoteServer();
    return "From Cloud Data Provider Service.";
  }
}
