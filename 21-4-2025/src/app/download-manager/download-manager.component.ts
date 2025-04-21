import { Component } from '@angular/core';
import { FileDownloader } from '../file-downloader';
import { FileDownloaderserviceService } from '../file-downloaderservice.service';
import { DataProviderserviceService } from '../data-providerservice.service';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-download-manager',
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.css']
})
export class DownloadManagerComponent {

  constructor(private dataSrv:DataProviderserviceService , private notifySrv:NotificationServiceService){

  }
  DownloadFile(){
    var string=this.dataSrv.GetData();
    console.log(string);
  
    var string4 = this.notifySrv.GetNoti();
    console.log(string4);

    //file download
    //console.log('File Downloading successfull')
    
    //var fileDownloader=new FileDownloader();
    //fileDownloader.DownloadFile();
    
    //notify client
    //console.log('Client Notified..')

    //this.dmSrv.DownloadFile();
  }
}
