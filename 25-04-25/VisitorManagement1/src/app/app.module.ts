import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { HostListComponent } from './host-list/host-list.component';
import { AddHostComponent } from './add-host/add-host.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerDashBoardComponent } from './manager-dash-board/manager-dash-board.component';
import { HostDashBoardComponent } from './host-dash-board/host-dash-board.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { HVisitorListComponent } from './hvisitor-list/hvisitor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorListComponent,
    AddVisitorComponent,
    HostListComponent,
    AddHostComponent,
    ManagerDashBoardComponent,
    HostDashBoardComponent,
    AppHomeComponent,
    EditVisitorComponent,
    EditHostComponent,
    HostHomeComponent,
    HVisitorListComponent,
   
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
