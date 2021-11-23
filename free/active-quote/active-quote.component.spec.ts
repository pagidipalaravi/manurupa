import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveQuoteComponent } from './active-quote.component';

describe('ActiveQuoteComponent', () => {
  let component: ActiveQuoteComponent;
  let fixture: ComponentFixture<ActiveQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
