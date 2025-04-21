import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloaderserviceService {

  constructor() { }
  DownloadFile():boolean
  {
    console.log("from service:filedownloaderservice: success");
    return true;
  }
}

