import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
   SendNotification() {
  console.log('Send Message');
  return 'Send Notification';
  }
}
