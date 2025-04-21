import { Injectable } from '@angular/core';
import { NotificationServiceService } from './notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmailNotifierService extends NotificationServiceService {
  constructor(private remoteEmail: SmtpsetupService) {
    super();

  }
  override SendMessage(): string {
    this.remoteEmail.ConnectEmailServer()
    return "E-mail Notifier"
  }

}
