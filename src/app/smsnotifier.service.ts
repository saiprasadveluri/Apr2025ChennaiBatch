import { Injectable } from '@angular/core';
import { SendNotificationService } from './send-notification.service';

@Injectable({
  providedIn: 'root'
})
export class SMSNotifierService extends SendNotificationService {

  constructor()
   { 
    super();
   }
   override SendMessage():string
   {
     return "Sent SMS Notification Successfully..."
   }
}
