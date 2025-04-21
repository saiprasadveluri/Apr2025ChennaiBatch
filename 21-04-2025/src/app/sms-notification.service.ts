import { Injectable } from '@angular/core';
import { __extends } from 'tslib';
import { NotificationserverService } from './notificationserver.service';

@Injectable({
  providedIn: 'root'
})
export class SmsNotificationService extends NotificationserverService{

constructor() 
{ 
  super();
  //this.remoteSrv=new RemoteAccessorService();

}
override SendMessage(): string 
{
  //accesss the remote service using remoteaccessorservice() class object.
  return "  From sms success....";
}
}
