import { Inject, Injectable } from '@angular/core';
import { Smtpsetup } from './smtpsetup';
import { EMAIL_INFO } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class SmtpsetupService {
  smtpinfodata:Smtpsetup; 

  constructor(@Inject(EMAIL_INFO) smtpdata:Smtpsetup) { 
    this.smtpinfodata=smtpdata;
  }
  ConnectEmailServer(){
    console.log(`from smtpsetupserver'
      Url:${this.smtpinfodata.Url}
      userName:${this.smtpinfodata.userName}
      password:${this.smtpinfodata.password}`)
  }

}
