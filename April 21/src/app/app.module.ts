import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
