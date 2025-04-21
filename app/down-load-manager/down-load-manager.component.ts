import { Component } from '@angular/core';
import { FileDownloader } from '../file-downloader';
import { FileDownloaderService } from '../file-downloader.service';
import { DataProviderService } from '../data-provider.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-down-load-manager',
  templateUrl: './down-load-manager.component.html',
  styleUrls: ['./down-load-manager.component.css']
})
export class DownLoadManagerComponent {
  constructor(private dataSrv:DataProviderService,private notsrv:NotificationService){

  }
DownloadFile(){
  var strMsg=this.dataSrv.GetData();
  console.log(strMsg);
  var strMsg1=this.notsrv.SendMessage();
  console.log(strMsg1);
}
}
