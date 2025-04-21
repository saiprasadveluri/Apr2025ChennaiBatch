import { Inject, Injectable } from '@angular/core';
import { Urlinfo } from './urlinfo';
import { urltoken } from './connectionConfig';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessService {
private urldata:Urlinfo;
  constructor(@Inject(urltoken) urldata:Urlinfo) {
    this.urldata=urldata
   }
  ConnectRemoteServer(){ 
    console.log(`'Connecting to remote server....' Server:${this.urldata.urlinfo},username:${this.urldata.username},password:${this.urldata.password}`);
  }
}
