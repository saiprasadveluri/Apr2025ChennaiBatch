import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsnotifiedService } from './smsnotified.service';
import { NotificationService } from './notification.service';
import { EmailnotifierService } from './emailnotifier.service';
import { EMAIL_INFO } from './emailConfig';
import { SmssetupService } from './smssetup.service';
import { smtpsetup } from './configuration';
import { NotificationFactory } from './Notificationfactory';

const smtpinfodata:smtpsetup ={
    url:"https://localhost/email",
    userName:'Sravani',
    password:'spassword'
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
        {
            provide:EMAIL_INFO,useValue:smtpinfodata},
            {
                provide:NotificationService,useFactory:NotificationFactory(1),deps:[SmssetupService]
            }
    ],
    bootstrap: [AppComponent]
        }
)
export class AppModule{ }



