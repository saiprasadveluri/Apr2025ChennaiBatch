import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { DataProviderService } from './data-provider.service';
import { DBDataProviderService } from './dbdata-provider.service';
import { CloudDataProviderService } from './cloud-data-provider.service';
import { DataServiceFactoryFunction } from './DataServiceFactory';
import { RemoteAccessorService } from './remote-accessor.service';
import { DBConnectionService } from './dbconnection.service';
import { ConnectionInfo } from './connection-info';
import { CONNECTION_INFO_TOKEN, URL_INFO_TOKEN } from './ConnectionConfig';
import { UrlInfo } from './url-info';
import { NotificationService } from './notification.service';
import { SmsNotificationService } from './sms-notification.service';
import { NotiOptFactoryFunction } from './NotiOptFactory';
import { EmailInfo } from './email-info';
import { SMTPSetupService } from './smtpsetup.service';
import { EMIAL_INFO_TOKEN } from './NotificationConfig';
const ConnnectionData:ConnectionInfo={
  serverName:'localhost',
  portNumber:8080,
  loginName:'pr',
  password:'mypswd'
};
const UrlInfo_: UrlInfo={
  Url:"www.",
  userName: 'prem',
  password: '123456'
};
const EmailInfoData_:EmailInfo={
  emailId:"prem@gmail.com",
  userName:'prem'
};
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
    {provide:CONNECTION_INFO_TOKEN, useValue:ConnnectionData},
    {provide: URL_INFO_TOKEN,useValue: UrlInfo_},
    {provide: EMIAL_INFO_TOKEN, useValue:EmailInfoData_},
    {provide:DataProviderService, useFactory:DataServiceFactoryFunction(0), deps:[RemoteAccessorService,DBConnectionService]},
    {provide: NotificationService, useFactory:NotiOptFactoryFunction(1), deps:[SMTPSetupService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
