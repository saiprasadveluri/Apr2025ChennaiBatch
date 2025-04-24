import { Injectable } from '@angular/core';
import { SmtpsetupService } from './smtpsetup.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EmailnotificationService extends NotificationService{

  constructor(private smtp:SmtpsetupService) { 
    super();
  }

  override sendMessage(): string {
    this.smtp.SetupSmtp();
    return "Email notification"
  }
}
