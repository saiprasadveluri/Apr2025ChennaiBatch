import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SmsService extends NotificationService {

  constructor() {
    super();
   }
   override sendMessage():string{
    return "From Sms";
   }
}
