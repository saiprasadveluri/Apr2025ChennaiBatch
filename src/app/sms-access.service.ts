import { Inject, Injectable } from '@angular/core';
import { SmsData } from './sms-data';
import { SmsToken } from './ConnectionConfig';

@Injectable({
  providedIn: 'root'
})
export class SmsAccessService {
  private Sms_Info:SmsData;
  constructor(@Inject(SmsToken)smsdata:SmsData) {
    this.Sms_Info=smsdata
   }
   ConnectSmsServer(){
    console.log(`Sms sent Success...Message :${this.Sms_Info.Message}, PhoneNo:${this.Sms_Info.PhNo}`)
   }
}
