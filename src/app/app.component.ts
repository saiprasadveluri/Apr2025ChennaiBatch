import { Component } from '@angular/core';
import { SendNotificationService } from './send-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FileManager';
  constructor(private NotificationSrv:SendNotificationService){

  }
  SendMessage()
  {
     var strMsg=this.NotificationSrv.SendMessage();
    console.log(strMsg);
  }
}
