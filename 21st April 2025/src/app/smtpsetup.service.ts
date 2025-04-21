import { Inject, Injectable } from '@angular/core';
import { EmailInfo } from './email-info';
import { EMIAL_INFO_TOKEN } from './NotificationConfig';

@Injectable({
  providedIn: 'root'
})
export class SMTPSetupService {
  private EmailInfoData_:EmailInfo;

  constructor(@Inject(EMIAL_INFO_TOKEN)EmailInfoData:EmailInfo){
    this.EmailInfoData_=EmailInfoData
  }
  ConnectEmail(){
    console.log(`'Connecting to email' EmailId: ${this.EmailInfoData_.emailId}, UserName:${this.EmailInfoData_.userName}`);
  }
}
