import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddlistComponent } from './addlist/addlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import {HttpClientModule} from '@angular/common/http';
import { EdituserComponent } from './edituser/edituser.component';
import { EditrestComponent } from './editrest/editrest.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdduserComponent,
    AddlistComponent,
    RestaurentListComponent,
    AddRestaurentComponent,
    EdituserComponent,
    EditrestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
