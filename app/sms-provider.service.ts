import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SmsServicesService } from './sms-services.service';

@Injectable({
  providedIn: 'root'
})
export class SmsProviderService extends NotificationService{

  constructor(private sms:SmsServicesService) {super() }  
  override SendMessage():string {
    super.SendMessage();
    this.sms.ConnectSmsServer();
    return "SMS PROVIDER";
  }

}
