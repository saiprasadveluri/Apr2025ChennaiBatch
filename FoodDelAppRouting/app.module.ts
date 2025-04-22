import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UserListComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
