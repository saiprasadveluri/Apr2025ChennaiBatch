import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { SmssetupService } from './smssetup.service';


@Injectable({
  providedIn: 'root'
})
export class EmailnotifierService  extends NotificationService{

  constructor(private smtpsetup:SmssetupService) {
    super();
  }
    override   SendNotification():string {
      this.smtpsetup.ConnectEmailServer();
      return 'Send Email';
  }
}

