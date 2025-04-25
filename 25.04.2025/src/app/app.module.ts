import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitorComponent } from './visitor/visitor.component';
import { HostComponent } from './host/host.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddHostComponent } from './add-host/add-host.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HomeComponent } from './home/home.component';
import { HostVisitorListComponent } from './host-visitor-list/host-visitor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VisitorComponent,
    HostComponent,
    AddHostComponent,
    AddVisitorComponent,
    HomeComponent,
    HostVisitorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
