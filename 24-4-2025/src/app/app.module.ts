import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HttpClientModule } from "@angular/common/http";
import { EdituserComponent } from './edituser/edituser.component';
import { ViewrestaurantComponent } from './viewrestaurant/viewrestaurant.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { AapphomeComponent } from './aapphome/aapphome.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerrestaurantComponent } from './ownerrestaurant/ownerrestaurant.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    AddUserComponent,
    AddRestaurantComponent,
    EdituserComponent,
    ViewrestaurantComponent,
    EditrestaurantComponent,
    AapphomeComponent,
    AdmindashboardComponent,
    OwnerdashboardComponent,
    OwnerhomeComponent,
    OwnerrestaurantComponent
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
