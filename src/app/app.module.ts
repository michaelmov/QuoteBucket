import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database'
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AuthService } from './core/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteCardComponent } from './quotes/quote-card/quote-card.component';
import { NewQuotePopoverComponent } from './components/new-quote-popover/new-quote-popover.component';
import { QuotesService } from './core/services/quotes.service';

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
    QuotesComponent,
    NavbarComponent,
    QuoteCardComponent,
    NewQuotePopoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    QuotesService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
