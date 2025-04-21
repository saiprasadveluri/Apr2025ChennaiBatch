import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor() { }
  DownloadFile():boolean{
    console.log(`From Service: FileDownload Service Successful`);
    return true;
  }
}
