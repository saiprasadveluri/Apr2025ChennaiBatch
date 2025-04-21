import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloaderServiceService {

  constructor() {}
    DownloadFile():boolean{
      console.log("From Service: FileDownloadService: Success");
      return true;
   }

}
