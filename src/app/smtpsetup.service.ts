import { Inject, Injectable } from '@angular/core';
import { smtpsetup } from './smtpsetup';
import { EMAIL_INFO } from './emailconfiguration';

@Injectable({
  providedIn: 'root'
})
export class SMTPSetupService {
   smtpInfoData:smtpsetup;

  constructor(@Inject(EMAIL_INFO) smtpdata:smtpsetup){
      this.smtpInfoData=smtpdata;
  }
  ConnectEmailServer()
  {
    console.log(`from smtpSetupServer
      Url:${this.smtpInfoData.Url}
      userName:${this.smtpInfoData.userName}
      password:${this.smtpInfoData.password}`)
    
  }

}
