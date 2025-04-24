import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import {HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';

import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { OwnerrestaurantComponent } from './ownerrestaurant/ownerrestaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    AddUserComponent,
    AddrestaurantComponent,
    EditUserComponent,

    RestaurantlistComponent,
     AppHomeComponent,
     AdminDashboardComponent,
     OwnerhomeComponent,
     OwnerdashboardComponent,
     OwnerrestaurantComponent,
     
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
