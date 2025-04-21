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
import { DbConnectionService } from './db-connection.service';
import { ConnectionInfo } from './connection-info';
import { CONNECTION_INFO_TOKEN, URL_INFO_TOKEN } from './connectionConfig';
import { UrlInfo } from './url-info';

const ConnectionData:ConnectionInfo =
{
  serverName:'localhost',
  portNumber:8080,
  loginName:'sa',
  password:'mypassword'
}

const UrlInfoData:UrlInfo={
  Url:"http://localhost/json",
  userName:'sai',
  password:'mypassword'
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
    {provide:CONNECTION_INFO_TOKEN,useValue:ConnectionData},
    {provide:URL_INFO_TOKEN,useValue:UrlInfoData},
    {provide:DataProviderService,useFactory:DataServiceFactoryFunction(0),deps:[RemoteAccessorService,DbConnectionService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
