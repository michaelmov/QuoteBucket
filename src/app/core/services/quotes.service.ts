import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase';
import {Quote} from '../models/quote';

@Injectable()
export class QuotesService {

  private quotes: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  fetchAllQuotes(userId: string): void {
    this.quotes = this.db.list(`quotes/${userId}`);
  }

  getAllQuotes(): FirebaseListObservable<any[]> {
    return this.quotes;
  }

  addNewQuote(quote: Quote): firebase.Promise<void> {
    return this.quotes.push(quote);
  }

  deleteQuote(quoteId): firebase.Promise<void> {
    return this.quotes.remove(quoteId);
  }
}

