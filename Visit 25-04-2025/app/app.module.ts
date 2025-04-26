import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VisitorListComponent } from './visitor-list/visitor-list.component'
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { EditVisitorListComponent } from './edit-visitor-list/edit-visitor-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HostListComponent } from './host-list/host-list.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HostVisitiorListComponent } from './host-visitior-list/host-visitior-list.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HostHomeComponent } from './host-home/host-home.component';
@NgModule({
  declarations: [
    AppComponent,
    AddVisitorComponent,
    VisitorListComponent,
    HomeComponent,
    EditVisitorListComponent,
    AddHostComponent,
    HostListComponent,
    AppHomeComponent,
    HostVisitiorListComponent,
    ManagerDashboardComponent,
    HostHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
