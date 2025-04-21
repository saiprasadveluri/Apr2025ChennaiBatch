import { Inject, Injectable } from '@angular/core';
import { UrlInfo } from './url-info';
import { UrlToken } from './connection.config';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessService {
  private urlInfoData_: UrlInfo;
  constructor (@Inject(UrlToken) urlInfoData: UrlInfo) {
    this.urlInfoData_ = urlInfoData
   }
  connectRemoteServer(){
    console.log(`'Connecting to Remote access Server...' Server:${this.urlInfoData_.urlInfo}, UserName:${this.urlInfoData_.userName}, Password:${this.urlInfoData_.password}`);
  }
}
