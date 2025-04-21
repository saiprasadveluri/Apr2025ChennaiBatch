import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { NotifyConnectionService } from './notify-connection.service';
import { SmsAccessService } from './sms-access.service';

@Injectable({
  providedIn: 'root'
})
export class SmsNotifyService extends NotificationService {

   constructor(private SMss:SmsAccessService) {
      super();
     }
     override SendMessage(): string {
      this.SMss.ConnectSmsServer();
       return "From SMS from Notification Service"
     }
}
