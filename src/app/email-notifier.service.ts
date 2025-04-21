import { Injectable } from '@angular/core';
import { SendNotificationService } from './send-notification.service';
import { SMTPSetupService } from './smtpsetup.service';

@Injectable({
  providedIn: 'root'
})
export class EMailNotifierService extends SendNotificationService{

  constructor(private remoteEmail:SMTPSetupService)
   { 
    super();
   }
   override SendMessage():string
   {
    this.remoteEmail.ConnectEmailServer()
     return "Sent EMail Notification Successfully...."
   }
}
