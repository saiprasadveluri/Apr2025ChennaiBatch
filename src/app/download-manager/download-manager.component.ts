import { Component } from '@angular/core';
import { FileDownloader } from '../file-downloader';
import { FileDownloaderServiceService } from '../file-downloader-service.service';
import { DataProviderServiceService } from '../data-provider-service.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-download-manager',
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.css']
})
export class DownloadManagerComponent {
  //constructor(private dmSrv:FileDownloaderServiceService){
  constructor(private dataSrv:DataProviderServiceService,private notifySrv:NotificationService){
  }
  DownloadFile(){
  //var fileDownloader=new FileDownloader();
  //fileDownloader.DownloadFile();
  //this.dmSrv.DownloadFile();

  var strMsg=this.dataSrv.GetData();
  console.log(strMsg);
  var notifyMsg=this.notifySrv.SendMessage();
  console.log(notifyMsg);
  
  }
}