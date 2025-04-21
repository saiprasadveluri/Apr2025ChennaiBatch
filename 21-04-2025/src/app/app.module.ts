import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './notification.service';
import { SmsService } from './sms.service';
import { EmailService } from './email.service';
import { NotificationFactoryFunction } from './NotificationFactory';
import { SmtpSetupService } from './smtp-setup.service';
import { SmtpInfo } from './smtp-info';
import { SMTP_TOKEN } from './SmtpConfig';
const SmtpData:SmtpInfo={
  url:'http://abc.com',
  email:'abc@gmail,com',
  loginid:234,
  password:'123456'
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {provide:NotificationService,useClass:SmsService},
    // {provide:NotificationService,useClass:EmailService}
    {provide:SMTP_TOKEN,useValue:SmtpData},
    {provide:NotificationService,useFactory:NotificationFactoryFunction(0),deps:[SmtpSetupService]}
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
