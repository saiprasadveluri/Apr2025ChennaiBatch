import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class EmailNotificationService extends NotificationService {
  override notify(): void {
    console.log('Sending Email notification...');
    // Add Email logic here
  }
}

