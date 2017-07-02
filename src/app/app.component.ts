import {Component, OnInit} from '@angular/core';
import { AuthService } from "./core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router) {}

}
