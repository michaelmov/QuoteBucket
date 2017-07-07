import { Component, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { QuotesService } from '../../core/services/quotes.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-quote-popover',
  templateUrl: './new-quote-popover.component.html',
  styleUrls: ['./new-quote-popover.component.scss']
})
export class NewQuotePopoverComponent {
  constructor(private quotesService: QuotesService) {}

  addQuote(event, quote: string, author: string, sourceUrl: string) {
    event.preventDefault();
      this.quotesService.addNewQuote({
      quote: quote,
      author: author,
      sourceUrl: sourceUrl,
      favorite: false,
      createdDate: firebase.database.ServerValue.TIMESTAMP
    }).then(
      () => {
        console.log('Quote added!');
    })
  }
}
