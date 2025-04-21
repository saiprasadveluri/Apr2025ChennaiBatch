import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloaderService {

  constructor() { }
  DownloadFile():boolean{
    console.log('From Service: FileDownloaderService: Success');
    return true;  
  }
}
