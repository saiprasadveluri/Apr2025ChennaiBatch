import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { DataProviderService } from './data-provider.service';
import { CloudDataProviderService } from './cloud-data-provider.service';
import { DataServiceFactoryF } from './data-service-factory';
import { RemoteAccessService } from './remote-access.service';
import { DbConnectionService } from './db-connection.service';
import { ConnectionInfo } from './connection-info';
import { ConnectInfoToken, SmsToken, UrlToken } from './connection.config';
import { UrlInfo } from './url-info';
import { NotificationService } from './notification.service';
import { NotificationFactory } from './notification-factory';
import { SmsData } from './sms-data';
import { SmsAccessService } from './sms-access.service';

const ConnectionData: ConnectionInfo = {
  serviceName: 'localhost',
  portNumber: 8080,
  loginName: 'sona',
  password: '12345678'
};
const UrlInfo_: UrlInfo={
  urlInfo: "https://v17.angular.io/tutorial/first-app/first-app-lesson-02",
  userName:'sona',
  password:'1234567890'
}
const Sms_Data: SmsData={
  Message: 'Hello I am Trinay',
  PhoneNo: 959999999
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
    {provide: ConnectInfoToken, useValue: ConnectionData},
    {provide: UrlToken, useValue: UrlInfo_},
    {provide: SmsToken, useValue: Sms_Data},
    {provide: NotificationService, useFactory:NotificationFactory(1),deps:[SmsAccessService]},
    
    {provide: DataProviderService, useFactory:DataServiceFactoryF(1),deps:[RemoteAccessService,DbConnectionService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
