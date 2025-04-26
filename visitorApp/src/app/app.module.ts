import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HostlistComponent } from './hostlist/hostlist.component';
import { AddhostComponent } from './addhost/addhost.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { HostvisitorlistComponent } from './hostvisitorlist/hostvisitorlist.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { HosthomeComponent } from './hosthome/hosthome.component';

@NgModule({
  declarations: [
    AppComponent,
    AddvisitorComponent,
    VisitorlistComponent,
    HomeComponent,
    HostlistComponent,
    AddhostComponent,
    ApphomeComponent,
    HostvisitorlistComponent,
    ManagerdashboardComponent,
    HosthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
