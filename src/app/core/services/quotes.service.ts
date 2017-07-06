import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class QuotesService {

  private quotes: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  fetchAllQuotes(userId: string): void {
    this.quotes = this.db.list(`quotes/${userId}`);
  }

  getAllQuotes(): FirebaseListObservable<any[]> {
    console.log(this.quotes);
    return this.quotes;
  }

  addNewQuote(quote): void {
    this.quotes.push(quote);
  }

  deleteQuote(quoteId): void {
    this.quotes.remove(quoteId);
  }
}

