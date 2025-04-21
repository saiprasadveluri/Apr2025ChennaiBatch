import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SMTPSetupService } from './smtpsetup.service';

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService extends NotificationService{

  constructor(private emailNoti:SMTPSetupService) { 
    super();
  }
  override GetNoti(): string {
    this.emailNoti.ConnectEmail()
    return "Email Notification Success";
  }
}
