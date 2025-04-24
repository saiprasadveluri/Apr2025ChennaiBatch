import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddlistComponent } from './addlist/addlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import {HttpClientModule} from '@angular/common/http';
import { EdituserComponent } from './edituser/edituser.component';
import { EditrestComponent } from './editrest/editrest.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { OwnerrestlistComponent } from './ownerrestlist/ownerrestlist.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdduserComponent,
    AddlistComponent,
    RestaurentListComponent,
    AddRestaurentComponent,
    EdituserComponent,
    EditrestComponent,
    AppHomeComponent,
    AdminDashboardComponent,
    OwnerhomeComponent,
    OwnerdashboardComponent,
    OwnerrestlistComponent
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
