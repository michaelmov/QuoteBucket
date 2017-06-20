import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  constructor(public af: AngularFireAuth) {
  }

  login(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
  }

  register(email, password) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.auth.signOut();
  }
}

