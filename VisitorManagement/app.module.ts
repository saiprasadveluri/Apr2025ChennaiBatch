import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HostHomeComponent } from './host-home/host-home.component';
import { HVisitorListComponent } from './h-visitor-list/h-visitor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorListComponent,
    HostListComponent,
    AddVisitorComponent,
    AddHostComponent,
    EditVisitorComponent,
    EditHostComponent,
    AppHomeComponent,
    ManagerDashboardComponent,
    HostDashboardComponent,
    HostHomeComponent,
    HVisitorListComponent
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
