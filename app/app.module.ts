import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostlistComponent } from './hostlist/hostlist.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HostformComponent } from './hostform/hostform.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitorFormComponent,
    VisitorListComponent,
    HostlistComponent,
    LoginComponent,
    HomeComponent,
    HostformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
