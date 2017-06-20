import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from "@angular/router";
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AuthService } from "./core/auth.service";
import { AngularFireAuth } from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: 'AIzaSyAoa2e9fSnnVpYi55-l7U12wEoewdEmi8Y',
  authDomain: 'quotebucket-627ef.firebaseapp.com',
  databaseURL: 'https://quotebucket-627ef.firebaseio.com',
  projectId: 'quotebucket-627ef',
  storageBucket: 'quotebucket-627ef.appspot.com',
  messagingSenderId: '283019581956'
};


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
