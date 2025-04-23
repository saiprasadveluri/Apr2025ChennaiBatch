import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    AddUserComponent,
    AddRestaurantComponent,
    RestaurantListComponent,
    EditUserComponent,
    EditRestaurantComponent
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
