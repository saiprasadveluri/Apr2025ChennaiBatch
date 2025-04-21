import { Inject, Injectable } from '@angular/core';
import { SmtpInfo } from './smtp-info';
import { SMTP_TOKEN } from './SmtpConfig';

@Injectable({
  providedIn: 'root'
})
export class SmtpSetupService {
  private SmtpData:SmtpInfo;

  constructor(@Inject(SMTP_TOKEN) SetData:SmtpInfo){
    this.SmtpData=SetData
   }
  SetupSmtp(){
    console.log(`Smtp Setup... 
      url:${this.SmtpData.url} 
      email:${this.SmtpData.email} 
      loginid:${this.SmtpData.loginid} 
      password:${this.SmtpData.password}`)
  }
}
