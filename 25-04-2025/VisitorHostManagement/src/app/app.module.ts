import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { ViewHostListComponent } from './view-host-list/view-host-list.component';
import { VisitorDashboardComponent } from './visitor-dashboard/visitor-dashboard.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HostVisitorListComponent } from './host-visitor-list/host-visitor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVisitorComponent,
    HomeComponent,
    VisitorListComponent,
    EditVisitorComponent,
    AddHostComponent,
    ViewHostListComponent,
    AppHomeComponent,
    VisitorDashboardComponent,
    HostHomeComponent,
    HostDashboardComponent,
    HostVisitorListComponent
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
