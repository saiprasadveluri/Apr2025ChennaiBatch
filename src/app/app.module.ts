import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownLoadManagerComponent } from './down-load-manager/down-load-manager.component';
import { DataProviderService } from './data-provider.service';
import { DBDataProviderService } from './dbdata-provider.service';
import { CloudDataProviderService } from './cloud-data-provider.service';
import { DataServiceFactoryFunction } from './data-service-factory';
import { RemoteAccessService } from './remote-access.service';
import { DbConnectionService } from './db-connection.service';
import { ConnectionInfo } from './connection-info';
import { Connection_Info_token, smstoken, urltoken } from './connectionConfig';
import { Urlinfo } from './urlinfo';
import { NotificationService } from './notification.service';
import { SmsFactoryFunction } from './sms-factory';
import { Smsdata } from './smsdata';
import { SmsServicesService } from './sms-services.service';
const ConnectionData:ConnectionInfo={
  serverName:'localhost',
  portNumber:8080,
  loginName:"saeas",
  password:'raee',
}
const urlinfo:Urlinfo={
  urlinfo:'sear',
  username:'rajeev',
  password:'1wqda132'
}
const sms_info:Smsdata={
  message: 'rajeev',
  mobileNo: 9848632324
}
@NgModule({
  declarations: [
    AppComponent,
    DownLoadManagerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   
    {provide:NotificationService,useFactory:SmsFactoryFunction(0),deps:[SmsServicesService]},
    {provide:urltoken,useValue:urlinfo},
    {provide:smstoken,useValue:sms_info},
    {provide:Connection_Info_token,useValue:ConnectionData},
    {provide:DataProviderService,useFactory:DataServiceFactoryFunction(0),deps:[RemoteAccessService,DbConnectionService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
