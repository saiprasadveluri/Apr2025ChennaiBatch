import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { AddhostComponent } from './addhost/addhost.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { HostvisitorlistComponent } from './hostvisitorlist/hostvisitorlist.component';
import { HosthomeComponent } from './hosthome/hosthome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddVisitorComponent,
    VisitorlistComponent,
    EditvisitorComponent,
    AddhostComponent,
    HostlistComponent,
    ApphomeComponent,
    ManagerdashboardComponent,
    HostvisitorlistComponent,
    HosthomeComponent,
  
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
