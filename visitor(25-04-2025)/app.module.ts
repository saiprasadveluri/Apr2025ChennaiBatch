import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HostListComponent } from './host-list/host-list.component';
import { LoginComponent } from './login/login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HostVisitListComponent } from './host-visit-list/host-visit-list.component';
import { HostHomeComponent } from './host-home/host-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVisitorComponent,
    VisitorListComponent,
    HomeComponent,
    EditVisitorComponent,
    AddHostComponent,
    HostListComponent,
    LoginComponent,
    AppHomeComponent,
    HostVisitListComponent,
    HostHomeComponent
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
