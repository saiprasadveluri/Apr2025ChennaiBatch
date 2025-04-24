import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DownloadService';

  constructor(private nsrv:NotificationService){


  }

  DownloadFile(){
    var StrMsg=this.nsrv.sendMessage();
    console.log(StrMsg);
  }
}
