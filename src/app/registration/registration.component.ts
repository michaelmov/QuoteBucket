import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public error: any;

  constructor(private authService: AuthService, private router: Router) { }

  register(event, email, password) {
    event.preventDefault();
    this.authService.register(email, password).then(
      (user) => {
        this.router.navigate(['/app'])
      },
      (error) => {
        this.error = error;
        console.log(this.error);
      }
    );
  }
}

