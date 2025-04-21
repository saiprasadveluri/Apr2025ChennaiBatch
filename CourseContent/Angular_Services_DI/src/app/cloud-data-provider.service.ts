import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { RemoteAccessorService } from './remote-accessor.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService extends DataProviderService
 {
  //remoteSrv:RemoteAccessorService;
  constructor(private remoteSrv:RemoteAccessorService) 
  {
    super();
    //this.remoteSrv=new RemoteAccessorService();
   }

   override GetData(): string {
    //Access the Remote Server using RemoteAccessorService() class object.
    this.remoteSrv.ConnectRemoteServer();
    return "From CloudDataProviderService...Success" ;
   }
}
