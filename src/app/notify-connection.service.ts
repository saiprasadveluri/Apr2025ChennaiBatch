import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyConnectionService {
 
  constructor() { }
  ConnecttoNotifation(){
    console.log("Connecting to Notification Server")
  }
}
