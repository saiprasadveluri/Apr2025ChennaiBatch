import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import {HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerRestaurantComponent } from './owner-restaurant/owner-restaurant.component';
import { EditRestaurantListComponent } from './edit-restaurant-list/edit-restaurant-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    AddUserComponent,
    AddRestaurantComponent,
    EditUserComponent,
    RestaurantListComponent,
    AppHomeComponent,
    AdminDashboardComponent,
    OwnerHomeComponent,
    OwnerDashboardComponent,
    OwnerRestaurantComponent,
    EditRestaurantListComponent
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
