import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  

  constructor() {

   }
  SendMessage():string {
    // console.log("I am in Notification service");
    return "Message sent successfully";
  }
}
