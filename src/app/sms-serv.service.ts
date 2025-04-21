import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SmsAccessService } from './sms-access.service';

@Injectable({
  providedIn: 'root'
})
export class SmsServService extends NotificationService{

  constructor(private sona:SmsAccessService) { super()}
  override SendMessage(): string {
    this.sona.ConnectSmsServer();
    return "From SmS Service."
  }
}
