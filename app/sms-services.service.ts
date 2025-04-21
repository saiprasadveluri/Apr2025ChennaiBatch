import { Inject, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Smsdata } from './smsdata';
import { smstoken } from './connectionConfig';


@Injectable({
  providedIn: 'root'
})
export class SmsServicesService {
  private sms_info:Smsdata;
  constructor(@Inject(smstoken) smsdat:Smsdata){
    this.sms_info=smsdat
  }
  ConnectSmsServer(){
    console.log(`'SMS sent...'Message:${this.sms_info.message},mobileNo:${this.sms_info.mobileNo}`);
  }
  
}
