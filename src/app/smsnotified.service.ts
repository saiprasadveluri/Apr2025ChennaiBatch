import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SmsnotifiedService extends NotificationService  {
  [x: string]: any;

  constructor() { 
    super();
  }
    override SendNotification():string {
      return 'Send SMS'
  }

}