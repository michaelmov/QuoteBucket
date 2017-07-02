import { Component, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-quote-popover',
  templateUrl: './new-quote-popover.component.html',
  styleUrls: ['./new-quote-popover.component.scss']
})
export class NewQuotePopoverComponent {
  @Input() quotes: FirebaseListObservable<any[]>;

  constructor() {}

  addQuote(event, quote: string, author: string, sourceUrl: string) {
    event.preventDefault();
    this.quotes.push({
      quote: quote,
      author: author,
      sourceUrl: sourceUrl
    })
  }
}
