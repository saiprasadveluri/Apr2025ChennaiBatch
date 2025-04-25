import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HostListComponent } from './host-list/host-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EditHostComponent } from './edit-host/edit-host.component';


@NgModule({
  declarations: [
    AppComponent,
    AddVisitorComponent,
    EditVisitorComponent,
    VisitorListComponent,
    AddHostComponent,
    HostListComponent,
    VisitorListComponent,
    HomeComponent,
    EditHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
