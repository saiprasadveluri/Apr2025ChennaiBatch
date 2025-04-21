import { Injectable } from '@angular/core';
import { NotifyConnectionService } from './notify-connection.service';
import { NotificationService } from './notification.service';
import { EmailAccessService } from './email-access.service';

@Injectable({
  providedIn: 'root'
})
export class EmailNotifyService extends NotificationService{

  constructor(private Emss:EmailAccessService) {
      super();
      }
    override SendMessage(): string {
        this.Emss.ConnectEmServer();
        return "From Email from Notification Service"
      }
}
