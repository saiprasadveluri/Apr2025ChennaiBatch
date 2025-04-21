import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationserverService } from './notificationserver.service';
import { DataServiceFactoryFunction } from './DataServiceFactory';
import { SMTPServiceService } from './smtpservice.service';
import { URL_INFO_TOKEN } from './connectConfig';
import { UrlInfo } from './urlInfo';
const URLData:UrlInfo={
  url:"https abc",
  email:"abc@gmail.com",
  name:"ahh",
  password:"agf"
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
    {provide:URL_INFO_TOKEN,useValue:URLData},
    {provide:NotificationserverService,useFactory:DataServiceFactoryFunction(0),deps:[SMTPServiceService]}],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
