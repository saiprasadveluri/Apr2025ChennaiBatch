import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  SendMessage():string{
    return "From Notification Service...Success"
  }
}
