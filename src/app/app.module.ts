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

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 main

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { UserSignInComponent } from './user/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import { HomeComponent } from './home/home.component';


const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
];
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

    UserSignInComponent,
    UserSignUpComponent,
    HomeComponent
 main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule

    FormsModule,
    materialComponents,
    BrowserAnimationsModule,
    ReactiveFormsModule
 main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
