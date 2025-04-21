import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SmtpsetupService } from './smtpsetup.service';

@Injectable({
  providedIn: 'root'
})
export class EmailnotifiedService extends NotificationService{

  constructor(private smtp:SmtpsetupService) { 
    super();
  }
  override sendnotif(): string{
    this.smtp.ConnectEmailServer();
    return 'email notified'
  }

 
}
