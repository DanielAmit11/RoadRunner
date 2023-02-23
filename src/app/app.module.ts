import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { ShowUserComponent } from './account/show-user/show-user.component';
import { AddEditUserComponent } from './account/add-edit-user/add-edit-user.component';
import { OrderComponent } from './order/order.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';
import { AddEditOrderComponent } from './order/add-edit-order/add-edit-order.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ShowRestaurantComponent } from './restaurant/show-restaurant/show-restaurant.component';
import { AddEditRestaurantComponent } from './restaurant/add-edit-restaurant/add-edit-restaurant.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {SharedService} from './shared.service';
import { UserRestaurantComponent } from './account/user-restaurant/user-restaurant.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ShowUserComponent,
    AddEditUserComponent,
    OrderComponent,
    ShowOrderComponent,
    AddEditOrderComponent,
    RestaurantComponent,
    ShowRestaurantComponent,
    AddEditRestaurantComponent,
    UserRestaurantComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 