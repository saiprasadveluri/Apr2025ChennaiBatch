import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SmsNotificationService extends NotificationService{


  constructor() { 
    super();
  }
  override GetNoti(): string {
    return 'SMS Notification success';
  }
}
