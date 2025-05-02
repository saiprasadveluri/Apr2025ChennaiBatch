import { Component } from '@angular/core';
import { NotificationserverService } from './notificationserver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataSrv:NotificationserverService)
  { 
  }
  Notifyme()
  {
    var strMsg=this.dataSrv.SendMessage();
    console.log(strMsg);

}
}
