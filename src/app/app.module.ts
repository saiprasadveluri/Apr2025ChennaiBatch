import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { DataProviderServiceService } from './data-provider-service.service';
import { DBDataProviderService } from './dbdata-provider.service';
import { CloudDataProviderService } from './cloud-data-provider.service';
import { DataServiceFactoryfunction } from './data-service-factory';
import { RemoteAccessService } from './remote-access.service';
import { DBConnectionService } from './dbconnection.service';
import { ConnectionInfo } from './connection-info';
import { CONNECTION_INFO_TOKEN, EmToken, SmsToken, URL_INFO_TOKEN } from './ConnectionConfig';
import { UrlInfo } from './urlInfo';
import { NotificationService } from './notification.service';
import { NotificationServiceFactoryfunction } from './notify-service-factory';
import { SmsData } from './sms-data';
import { SmsNotifyService } from './sms-notify.service';
import { SmsAccessService } from './sms-access.service';
import { EmailAccessService } from './email-access.service';
import { EmData } from './em-data';
const ConnectionData:ConnectionInfo={
  serverName:'Localhost',
  portNumber: 8000,
  loginName:'Hari',
  password:'my_Password'
}
const UrlInfoData_:UrlInfo={
    Url:'http://localhost',
    userName:'Raja',
    password:'my_passwords'
}
const Sms_Data:SmsData={
  Message:"Hi fellow",
  PhNo:9966558877
}
const Em_Data:EmData={
  Email:"Email Notification Received",
  Mail_Id:"hari@gmail.com"
}
@NgModule({
  declarations: [
    AppComponent,
    DownloadManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:CONNECTION_INFO_TOKEN,useValue:ConnectionData},
    {provide:URL_INFO_TOKEN,useValue:UrlInfoData_},
    {provide:SmsToken,useValue:Sms_Data},
    {provide:EmToken,useValue:Em_Data},
  // {provide:DataProviderServiceService,useClass:DBDataProviderService},
  // {provide:DataProviderServiceService,useClass:CloudDataProviderService}
  //{provide:DBDataProviderService,useClass:DataProviderServiceService}
  {provide:NotificationService,useFactory:NotificationServiceFactoryfunction(0),deps:[SmsAccessService,EmailAccessService]},
  {provide:DataProviderServiceService,useFactory:DataServiceFactoryfunction(1),deps:[RemoteAccessService, DBConnectionService]}//class dependency is dependent on service of Remote Access.. 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
