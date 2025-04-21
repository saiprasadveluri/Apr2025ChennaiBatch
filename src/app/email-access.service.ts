import { Inject, Injectable } from '@angular/core';
import { EmToken } from './ConnectionConfig';
import { EmData } from './em-data';

@Injectable({
  providedIn: 'root'
})
export class EmailAccessService {
  private Em_Info:EmData;
  constructor(@Inject(EmToken)emsdata:EmData) { 
    this.Em_Info=emsdata;
  }
  ConnectEmServer(){
    console.log(`Sms sent Success...Message :${this.Em_Info.Email}, Mail_ID:${this.Em_Info.Mail_Id}`)
   }
}
