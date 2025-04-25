import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    ManagerDashboardComponent,
    VisitorListComponent,
    HostListComponent,
    AddVisitorComponent,
    AddHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
