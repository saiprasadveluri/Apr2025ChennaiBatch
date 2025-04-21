import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private dsvs:NotificationService){

  }

   SendMessage ()
  {
    var strMsg=this.dsvs.SendNotification();
    console.log(strMsg);   
  }
}
