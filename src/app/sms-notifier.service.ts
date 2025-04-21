import { Injectable } from '@angular/core';
import { NotificationServiceService } from './notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class SmsNotifierService extends NotificationServiceService {


  constructor() {
    super();

  }
  override SendMessage(): string {
    return "SMS Notifier"
  }
}
