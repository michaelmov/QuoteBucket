import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {}


  login(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  register(email, password) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.auth.signOut();
  }

  saveUserInfo(uid, name, email) {
    return this.db.object('users/' + uid).set({
      name: name,
      email: email
    });
  }

  getCurrentUser() {
    return this.af.auth.currentUser;
  }

  getAuthState(): Observable<firebase.User> {
    return this.af.authState;
  }
}

