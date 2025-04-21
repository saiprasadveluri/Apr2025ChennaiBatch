
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class SmsNotificationService extends NotificationService {
  override notify(): void {
    
    console.log('Sending SMS notification...');
    // Add SMS logic here
  }
}
