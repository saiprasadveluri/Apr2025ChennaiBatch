import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SmsnotificationService extends NotificationService {

  constructor( ) { 
    super()
  }

  override sendMessage(): string {
    return "SMS Notification"
  }
}
