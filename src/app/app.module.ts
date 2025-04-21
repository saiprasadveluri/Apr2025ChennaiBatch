import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendNotificationService } from './send-notification.service';
import { SMSNotifierService } from './smsnotifier.service';
import { EMailNotifierService } from './email-notifier.service';
import { smtpsetup} from './smtpsetup';
import { EMAIL_INFO } from './emailconfiguration';
import { SMTPSetupService } from './smtpsetup.service';
import { NotificationFactory } from './sendNotifiicationFactory';
const smtpInfoData:smtpsetup={
  Url:"https://localhost/email",
  userName:"sowmika",
  password:"myPassword"
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //{provide:SendNotificationService,useClass:SMSNotifierService},
    //{provide:SendNotificationService,useClass:EMailNotifierService}
      {provide:EMAIL_INFO,useValue:smtpInfoData},
      {provide:SendNotificationService,useFactory:NotificationFactory(1),deps:[SMTPSetupService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
