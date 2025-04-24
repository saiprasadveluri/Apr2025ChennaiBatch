import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './notification.service';
import { EmailnotificationService } from './emailnotification.service';
import { SmsnotificationService } from './smsnotification.service';
import { NotificationFactoryFunction } from './NotificationFactory';
import { SmtpsetupService } from './smtpsetup.service';
import { SMTP_TOKEN } from './Smtpconfig';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {provide:NotificationService,useClass:EmailnotificationService},
    // {provide:NotificationService,useClass:SmsnotificationService},
    
    {provide:NotificationService,useFactory:NotificationFactoryFunction(0),deps:[SmtpsetupService]},
    {provide:SMTP_TOKEN,useValue:smtpData}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
