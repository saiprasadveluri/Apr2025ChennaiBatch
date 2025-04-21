import { Inject, Injectable } from '@angular/core';
import { URL_INFO_TOKEN } from './ConnectionConfig';
import { UrlInfo } from './urlInfo';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessService {
  private urlInfoData_:UrlInfo;
  constructor(@Inject(URL_INFO_TOKEN)urlInfoData:UrlInfo) {
    this.urlInfoData_=urlInfoData;
   }
  ConnectRemoteServer(){
    console.log(`Connecting to Remote Server:${this.urlInfoData_.Url} - UserName:${this.urlInfoData_.userName} - Password:${this.urlInfoData_.password}`);
  }
}
