import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EmailProviderService extends NotificationService {

  constructor() { super()}  
  override SendMessage():string {
    super.SendMessage();
    return "EMAIL SENT";
  }
}
