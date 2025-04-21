import { Inject, Injectable, Input } from '@angular/core';
import { Email_Token } from './download-manager/ConnectionConfig';
import { SMPTDataObj } from './smptdata-obj';

@Injectable({
  providedIn: 'root'
})
export class SMTPSetupServiceService {
  
  private EmailInfoData_:SMPTDataObj;
  constructor(@Inject(Email_Token) Email_Token1:SMPTDataObj) {
      this.EmailInfoData_=Email_Token1
   }
   ConnectEmail(){
    console.log(`'Connecting emailid' EmailId: ${this.EmailInfoData_.EmailId}, UserName: ${this.EmailInfoData_.UserName}`)
   }
}
