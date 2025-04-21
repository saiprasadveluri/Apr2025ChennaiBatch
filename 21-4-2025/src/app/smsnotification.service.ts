import { Injectable } from '@angular/core';
import { NotificationServiceService } from './notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class SMSNotificationService extends NotificationServiceService {

  constructor() {
    super();
  
   }
   override GetNoti(): string {
     return "SMS notifocation"
   }
}
