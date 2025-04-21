import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationService {

  constructor(){} 

   SendMessage()
   {
    console.log('Send Message');
    return "Message sent from notification service...."
   }

  
}
