import { Component } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: any;

  constructor(public authService: AuthService, private router: Router) { }

  login(event, email, password) {
    event.preventDefault();
    this.authService.login(email, password).then(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        this.error = error;
        console.log(this.error);
      }
    )
  }
}
