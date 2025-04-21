import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app.routes.server';
import { AppComponent } from './app.component';
import { SmsNotifierService } from './sms-notifier.service';
import { NotificationServiceService } from './notification-service.service';
import { EmailNotifierService } from './email-notifier.service';
import { EMAIL_INFO } from './EmailConfig';
import { Smtpsetup } from './smtpsetup';
import { NotificationFactory } from './NotificationFactory';
import { SmtpsetupService } from './smtpsetup.service';



const smtpInfoData: Smtpsetup = {
    Url: "https://localhost/emailnotification",
    UserName: "reddy",
    password: "password"
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        // AppRoutingModule
    ],
    providers: [
        // {provide:NotificationService,useClass:SMSNotifierService}
        // {provide:NotificationService,useClass:EmailNotifierService}
        { provide: EMAIL_INFO, useValue: smtpInfoData },
        {
            provide: NotificationServiceService, useFactory: NotificationFactory(1), deps: [SmtpsetupService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }