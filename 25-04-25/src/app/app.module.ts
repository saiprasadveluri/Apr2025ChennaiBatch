import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { FormsModule } from '@angular/forms';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { OwnerlistComponent } from './ownerlist/ownerlist.component';
import { AddHostComponent } from './add-host/add-host.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { EditHostComponent } from './edit-host/edit-host.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { HostListComponent } from './host-list/host-list.component';
import { HostHomeComponent } from './host-home/host-home.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorListComponent,
    AddVisitorComponent,
    EditVisitorComponent,
    OwnerlistComponent,
    AddHostComponent,
    AppHomeComponent,
    EditHomeComponent,
    EditHostComponent,
    HostDashboardComponent,
    HostListComponent,
    HostHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
