import {Component, Input, OnInit} from '@angular/core';
import {QuotesService} from '../../core/services/quotes.service';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent {
  @Input() quote;

  constructor(private quotesService: QuotesService) { }

  deleteQuote(event, key) {
    event.preventDefault();
    this.quotesService.deleteQuote(key);
  }
}
