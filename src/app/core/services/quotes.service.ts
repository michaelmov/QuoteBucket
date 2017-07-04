import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AuthService} from './auth.service';

@Injectable()
export class QuotesService {

  constructor(private db: AngularFireDatabase, private authService: AuthService) {

  }

  getAllQuotes(userId: string): FirebaseListObservable<any[]> {
    return this.db.list(`quotes/${userId}`);
  }
}
