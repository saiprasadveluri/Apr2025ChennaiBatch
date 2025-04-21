import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmtpsetupService {


  smtpinfodata: Smtpsetup;

  constructor(@Inject(EMAIL_INFO) smtpdata: Smtpsetup) {
    this.smtpinfodata = smtpdata;
  }
  ConnectEmailServer() {
    console.log(`from smtpsetupserver'
      Url:${this.smtpinfodata.Url}
      UserName:${this.smtpinfodata.UserName}
      password:${this.smtpinfodata.password}`)
  }

}
