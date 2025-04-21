import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationserverService  {

  constructor() { }

  SendMessage():string{
  return "from notification...."
}
}