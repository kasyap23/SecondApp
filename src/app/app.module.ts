import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/users/UserSignUpFormComponent/signup.component';
import { SigninComponent } from './components/users/UserSignInFormComponent/signin.component';
import { ViewUserComponent } from './components/users/ViewUserProfileComponent/view-user.component';
import { EditUserComponent } from './components/users/EditUserProfileComponent/edit-user.component';
import { ProductDetailsComponent } from './components/products/ProductDetailsComponent/product-details.component';
import { OrderDetailsComponent } from './components/orders/OrderDetailsComponent/order-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/NavbarComponent/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ViewUserComponent,
    EditUserComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
