import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostListComponent } from './host-list/host-list.component';
import { AddhostComponent } from './addhost/addhost.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { HostuserComponent } from './hostuser/hostuser.component';
import { HostdashComponent } from './hostdash/hostdash.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorListComponent,
    AddvisitorComponent,
    HostListComponent,
    AddhostComponent,
    ManagerComponent,
    LoginhomeComponent,
    HostuserComponent,
    HostdashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
