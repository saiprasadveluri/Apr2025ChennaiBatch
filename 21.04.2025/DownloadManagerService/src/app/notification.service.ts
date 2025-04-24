import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  sendMessage():string{

    return "From Notification service"

  }
}
