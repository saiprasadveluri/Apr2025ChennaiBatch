import { Component } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { NotificationService } from '../notification.service';
// import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-download-manager',
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.css']
})
export class DownloadManagerComponent {
  constructor(private dataser: DataProviderService,private notifyS:NotificationService) {
  }
  DownloadFile(){
    var str = this.dataser.GetData();
    console.log(str);
    // this.notifyS.SendMessage()
    var str1 = this.notifyS.SendMessage();
    console.log(str1)

  }
}
