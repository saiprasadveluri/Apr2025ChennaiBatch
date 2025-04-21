import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private nSrv:NotificationService){
  }
  DownloadFile(){
    var strMsg=this.nSrv.sendMessage();
    console.log(strMsg);
  }
}
