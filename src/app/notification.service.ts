import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  sendmsg() {
    throw new Error('Method not implemented.');
  }

  constructor()
   { }
   
   sendnotif():string{
   
    return 'message sent from notification service'
  }
}
