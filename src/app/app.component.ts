import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { SmsnotifiedService } from './smsnotified.service';
import { EmailnotifiedService } from './emailnotified.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sendmessage';

  constructor(private sdms: NotificationService){
    
  }
  sendmsg()
  {
    var strMsg=this.sdms.sendnotif();
    console.log(strMsg);   
  }
}
