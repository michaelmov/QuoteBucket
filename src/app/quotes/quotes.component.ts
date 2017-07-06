import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { QuotesService } from '../core/services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  public isLoggedIn: boolean;
  public quotes: FirebaseListObservable<any[]>;
  private currentUser;

  constructor(
    private authService: AuthService,
    private quotesService: QuotesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe(
      (auth) => {
        if (auth != null) {
          this.isLoggedIn = true;
          this.currentUser = this.authService.getCurrentUser();
          this.quotesService.fetchAllQuotes(this.currentUser.uid);
          this.quotes = this.quotesService.getAllQuotes();
          this.router.navigate(['']);

        } else {
          console.log('Not logged in');
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
