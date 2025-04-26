import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistorListComponent } from './vistor-list/vistor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewVisitorComponent } from './add-new-visitor/add-new-visitor.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HostListComponent } from './host-list/host-list.component';
import { LoginComponent } from './login/login.component';
import { HostVistListComponent } from './host-vist-list/host-vist-list.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { ManagerComponent } from './manager/manager.component';
@NgModule({
  declarations: [
    AppComponent,
    VistorListComponent,
    AddNewVisitorComponent,
    HomeComponent,
    AddHostComponent,
    HostListComponent,
    LoginComponent,
    HostVistListComponent,
    HostHomeComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
