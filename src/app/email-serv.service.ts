import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EmailServService extends NotificationService {

  constructor() {super() }
  override SendMessage(): string {
      // console.log("Email Notification")
      return "Email Notification."
  }
}
