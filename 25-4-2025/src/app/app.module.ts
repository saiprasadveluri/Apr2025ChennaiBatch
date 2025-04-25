import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitorlistComponent } from './visitorlist/visitorlist.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { AddhostComponent } from './addhost/addhost.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { EdithostComponent } from './edithost/edithost.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { HostdashboardComponent } from './hostdashboard/hostdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HosthomeComponent } from './hosthome/hosthome.component';
import { HostvisitorlistComponent } from './hostvisitorlist/hostvisitorlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorlistComponent,
    AddvisitorComponent,
    AddhostComponent,
    HostlistComponent,
    EditvisitorComponent,
    EdithostComponent,
    ApphomeComponent,
    ManagerdashboardComponent,
    HostdashboardComponent,
    HosthomeComponent,
    HostvisitorlistComponent
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
