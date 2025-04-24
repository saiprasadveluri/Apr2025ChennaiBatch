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
import { ApphomeComponent } from './apphome/apphome.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerRestaurantComponent } from './owner-restaurant/owner-restaurant.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserlistComponent,
    AddUserComponent,
    AddRestaurantComponent,
    ListRestaurantComponent,
    EditUserComponent,
    ApphomeComponent,
    AdminDashComponent,
    OwnerDashboardComponent,
    OwnerRestaurantComponent,
    OwnerhomeComponent
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
