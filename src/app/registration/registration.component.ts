import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public error: any;

  constructor(private authService: AuthService, private router: Router) { }

  register(event, name, email, password) {
    event.preventDefault();
    this.authService.register(email, password).then(
      (user) => {
        this.authService.saveUserInfo(user.uid, name, email).then(() => {
          this.router.navigate(['']);
        });
      },
      (error) => {
        this.error = error;
        console.log(this.error);
      }
    );
  }
}

