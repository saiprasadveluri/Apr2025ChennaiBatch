import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { VisitoeListComponent } from './visitoe-list/visitoe-list.component';
import { HomeComponent } from './home/home.component';
import { EditvisitorComponent } from './editvisitor/editvisitor.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { AddhostComponent } from './addhost/addhost.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVisitorComponent,
    VisitoeListComponent,
    HomeComponent,
    EditvisitorComponent,
    HostlistComponent,
    AddhostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
