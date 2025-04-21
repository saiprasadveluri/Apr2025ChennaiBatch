import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './notification.service';
import { SmsnotifiedService } from './smsnotified.service';
import { EmailnotifiedService } from './emailnotified.service';
import { Smtpsetup } from './smtpsetup';
import { EMAIL_INFO } from './configuration';
import { notiffactory } from './notiffactory';
import { SmtpsetupService } from './smtpsetup.service';

const smtpinfodata:Smtpsetup ={
  Url:"https://localhost/emailnotification",
  userName:'manogna',
  password:'mpwd'
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
    // {provide:NotificationService,useClass:SmsnotifiedService }
    // {provide:NotificationService,useClass:EmailnotifiedService }
    {provide:EMAIL_INFO,useValue: smtpinfodata},
    {provide:NotificationService,useFactory:notiffactory(1),deps:[SmtpsetupService]}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
