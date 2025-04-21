import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SmtpSetupService } from './smtp-setup.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService extends NotificationService{

  constructor(private smtp:SmtpSetupService) { 
    super();
  }
  override sendMessage(): string {
    this.smtp.SetupSmtp();
    return"From email";
  }
}
