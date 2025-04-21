import { Inject, Injectable } from '@angular/core';
import { EMAIL_INFO } from './emailConfig';
import { smtpsetup } from './configuration';


@Injectable({
  providedIn: 'root'
})
export class SmssetupService {
  smtpinfodata:smtpsetup;
  url: any;
  userName: any;
  password: any;

  constructor(@Inject(EMAIL_INFO) smtpdata:smtpsetup) {
    this.smtpinfodata=smtpdata;
    
}
ConnectEmailServer(){
  console.log(`from smtpsetupserver
    url:${this.smtpinfodata.url}
    userName:${this.smtpinfodata.userName}
    password:${this.smtpinfodata.password}`)
    
}
}