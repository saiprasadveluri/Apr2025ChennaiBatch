import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { DataProviderserviceService } from './data-providerservice.service';
import { DBDataProviderService } from './db-data-provider.service';
import { CloudDataServiceService } from './cloud-data-service.service';
import { DataServiceFactoryFunction } from './DataServiceFactory';
import { RemoteAccessService } from './remote-access.service';
import { ConnectConfig } from 'rxjs';
import { ConnectionInfo } from './connection-info';
import { NotificationServiceService } from './notification-service.service';
import { SMSNotificationService } from './smsnotification.service';
import { NotifiactionFactory } from './notifiaction-factory';
import { SMPTDataObj } from './smptdata-obj';
import { Email_Token } from './download-manager/ConnectionConfig';
import { SMTPSetupServiceService } from './smtpsetup-service.service';

const EmailInfoData_:SMPTDataObj={
    UserName:"Trinay",
    EmailId:"trinay@gmail.com"
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
  providers: [{provide:Email_Token,useValue:EmailInfoData_},
    {provide: NotificationServiceService, useFactory: NotifiactionFactory(0), deps:[SMTPSetupServiceService]},
    {provide: DataProviderserviceService, useFactory: DataServiceFactoryFunction(0)}],

  
  bootstrap: [AppComponent]
})
 export class AppModule { }
