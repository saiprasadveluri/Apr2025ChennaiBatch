import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import{HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { OwnerRestaurantComponent } from './owner-restaurant/owner-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserlistComponent,
    AdduserComponent,
    AddrestaurantComponent,
    EditUserComponent,
    RestaurantListComponent,
    EditrestaurantComponent,
    AppHomeComponent,
    AdminDashboardComponent,
    OwnerhomeComponent,
    OwnerdashboardComponent,
    OwnerRestaurantComponent
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
