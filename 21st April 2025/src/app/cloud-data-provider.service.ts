import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { RemoteAccessorService } from './remote-accessor.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService extends DataProviderService{
  //remoteSrc:RemoteAccessorService;


  constructor(private remoteSrc:RemoteAccessorService) {
    super();
    //this.remoteSrc=new RemoteAccessorService();
   }
  override GetData(): string {
    //Access the remote server using RemoteAccessorSevice() Class object
    this.remoteSrc.ConnectRemoteServer();
    return "From cloudDataProvider....success";
  }

}
