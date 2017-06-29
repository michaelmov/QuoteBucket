import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-new-quote-popover',
  templateUrl: './new-quote-popover.component.html',
  styleUrls: ['./new-quote-popover.component.scss']
})
export class NewQuotePopoverComponent {
  private quotes: FirebaseListObservable<any[]>;
  private newQuote;

  constructor(db: AngularFireDatabase) {
    this.quotes = db.list('/quotes');
  }
  addQuote(event, quote: string, author: string, sourceUrl: string) {
    event.preventDefault();
    this.quotes.push({
      quote: quote,
      author: author,
      sourceUrl: sourceUrl
    })
  }
}
