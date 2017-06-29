import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuotePopoverComponent } from './new-quote-popover.component';

describe('NewQuotePopoverComponent', () => {
  let component: NewQuotePopoverComponent;
  let fixture: ComponentFixture<NewQuotePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuotePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuotePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
