import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SmsnotifiedService extends NotificationService{

  constructor() {
    super();
   }
   override sendnotif(): string{
     return 'sms notified'
   }
  
}
