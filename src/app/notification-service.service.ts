import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {


  constructor() { }
  SendMessage() {
    console.log('Send Message');
    return 'message sent from notification service'
  }
}
