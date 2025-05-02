import { Injectable } from '@angular/core';
import { NotificationserverService } from './notificationserver.service';
import { SMTPServiceService } from './smtpservice.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService extends NotificationserverService {

  constructor(private SMPTSrv:SMTPServiceService) {
    super();
   }
  
override SendMessage(): string 
{
  this.SMPTSrv.ConnectSMTPServer();
  //accesss the remote service using remoteaccessorservice() class object.
  return "  From Email success....";
}
}




 