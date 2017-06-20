import { Component } from '@angular/core';
import { AuthService } from "./core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.isLoggedIn = true;
          this.router.navigate(['']);
        } else {
          console.log("Not logged in");

          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
      }
    )
  }
}
