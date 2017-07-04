import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  public isLoggedIn: boolean;
  public quotes: FirebaseListObservable<any[]>;
  private currentUser;

  constructor(private authService: AuthService, private router: Router, private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.isLoggedIn = true;
          this.currentUser = this.authService.getCurrentUser();
          this.quotes = this.db.list(`quotes/${this.currentUser.uid}`);
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
