import {Component, Input, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
