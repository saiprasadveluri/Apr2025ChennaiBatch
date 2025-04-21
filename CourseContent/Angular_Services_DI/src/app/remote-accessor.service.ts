import { Inject, Injectable } from '@angular/core';
import { UrlInfo } from './url-info';
import { URL_INFO_TOKEN } from './connectionConfig';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessorService {

  UrlInfoData:UrlInfo;
  constructor(@Inject(URL_INFO_TOKEN) urlData:UrlInfo) 
  { 
    this.UrlInfoData=urlData;
  }

  ConnectRemoteServer()
  {
    console.log(`Connecting to remote server....${this.UrlInfoData.Url}`);
  }
}
