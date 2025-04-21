import { Component } from '@angular/core';
import { FileDownloader } from '../file-downloader';
import { FileDownloaderService } from '../file-downloader.service';
import { DataProviderService } from '../data-provider.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-download-manager',
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.css']
})
export class DownloadManagerComponent {
  constructor(private dataSrv:DataProviderService, private notifySrv:NotificationService){

  }
  DownloadFile(){
    var strMsg=this.dataSrv.GetData();
    console.log(strMsg);
    /*console.log('File Downloading success');
    var fileDownloader = new FileDownloader();
    fileDownloader.DownloadFile();*/ 
  }
  SendNotification(){
    var sendNoti=this.notifySrv.GetNoti();
    console.log(sendNoti);
  }
}
