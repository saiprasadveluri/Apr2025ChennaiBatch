import { Inject, Injectable } from '@angular/core';
import { SmtpInfo } from './Smtp-info';
import { SMTP_TOKEN } from './Smtpconfig';

@Injectable({
  providedIn: 'root'
})
export class SmtpsetupService {
  private smtpData:SmtpInfo;
constructor(@Inject(SMTP_TOKEN) SetData:SmtpInfo){
  this.smtpData=SetData;

}

SetupSmtp(){
  return console.log(`Smtp setup'
    url:${this.smtpData.url} 
      email:${this.smtpData.email} 
      loginid:${this.smtpData.loginid} 
      password:${this.smtpData.password}`
  );
}
  
}
