import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationServiceService } from './notification-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'SendNotification';
  constructor(private NSrv: NotificationServiceService) {

  }
  SendMessage() {
    var strmsg = this.NSrv.SendMessage();
    console.log(strmsg);
  }
}
