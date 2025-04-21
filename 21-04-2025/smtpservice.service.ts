import { Inject, Injectable } from '@angular/core';
import { URL_INFO_TOKEN } from './connectConfig';
import { UrlInfo } from './urlInfo';

@Injectable({
  providedIn: 'root'
})
export class SMTPServiceService {
  private URLData:UrlInfo;
  constructor(@Inject(URL_INFO_TOKEN) urlInfoData:UrlInfo) {
    this.URLData=urlInfoData;
   }
  ConnectSMTPServer(){
    console.log(`Connecting to SMPTServer: url:${this.URLData.url} email:${this.URLData.email}
      name:${this.URLData.name} password:${this.URLData.password}
       `);
  }
}
