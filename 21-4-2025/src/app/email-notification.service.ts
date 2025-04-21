import { Injectable } from '@angular/core';
import { NotificationServiceService } from './notification-service.service';
import { RemoteAccessService } from './remote-access.service';
import { SMPTDataObj } from './smptdata-obj';
import { SMTPSetupServiceService } from './smtpsetup-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService extends NotificationServiceService{

  constructor(private Eamilidnoti:SMTPSetupServiceService) {
    super();
   
     }
     override GetNoti(): string {
      //access the remote serverusing RemoteAccessService() class object;
      this.Eamilidnoti.ConnectEmail()
       return 'From Email Notification Successful';
     }
}
