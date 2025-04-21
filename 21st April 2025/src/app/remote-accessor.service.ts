import { Inject, Injectable } from '@angular/core';
import { UrlInfo } from './url-info';
import { URL_INFO_TOKEN } from './ConnectionConfig';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessorService {
  private UrlInfoData_:UrlInfo;
  

  constructor(@Inject(URL_INFO_TOKEN) UrlInfoData: UrlInfo) {
    this.UrlInfoData_= UrlInfoData
   }
  ConnectRemoteServer(){
    console.log(`'connceting to Database...' Server:${this.UrlInfoData_.Url}, UserName:${this.UrlInfoData_.userName}`);
  } 
}
