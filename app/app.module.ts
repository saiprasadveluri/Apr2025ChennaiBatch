import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerRestaurantComponent } from './owner-restaurant/owner-restaurant.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserlistComponent,
    AddUserComponent,
    AddRestaurantComponent,
    ListRestaurantComponent,
    EditUserComponent,
    AppHomeComponent,
    AdminDashboardComponent,
    OwnerDashboardComponent,
    OwnerRestaurantComponent,
    OwnerHomeComponent
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
