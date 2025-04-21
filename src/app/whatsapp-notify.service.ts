import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { NotifyConnectionService } from './notify-connection.service';

@Injectable({
  providedIn: 'root'
})
export class WhatsappNotifyService extends NotificationService{

  constructor(private WappConSrv:NotifyConnectionService) {
        super();
       }
       override SendMessage(): string {
        this.WappConSrv.ConnecttoNotifation();
         return "Whatsapp Notify from Notification Service"
       }
}
