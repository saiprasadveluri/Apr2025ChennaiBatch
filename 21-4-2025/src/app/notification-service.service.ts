import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService{

  constructor() { 
   }
   GetNoti(): string {
     return "this.GetNoti()";
   }
}