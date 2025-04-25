import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HostListComponent } from './host-list/host-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HvisitorListComponent } from './hvisitor-list/hvisitor-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorlistComponent,
    AddVisitorComponent,
    HostListComponent,
    ManagerDashboardComponent,
    HostDashboardComponent,
    AppHomeComponent,
    AdminDashboardComponent,
    EditVisitorComponent,
    AddHostComponent,
    EditHostComponent,
    HostHomeComponent,
    HvisitorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
