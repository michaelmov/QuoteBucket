import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
