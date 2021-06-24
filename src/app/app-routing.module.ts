import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSignInComponent} from './user/user-sign-in/user-sign-in.component';
import {UserSignUpComponent} from './user/user-sign-up/user-sign-up.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: UserSignInComponent},
  {path: 'signup', component: UserSignUpComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
