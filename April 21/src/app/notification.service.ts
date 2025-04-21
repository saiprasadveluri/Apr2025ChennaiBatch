import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notify(): void {
    console.log('Default Notification');
  }
}
