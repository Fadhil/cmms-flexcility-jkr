import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrCancelledConfirmationComponent } from './helpdesk-wr-cancelled-confirmation.component';

describe('HelpdeskWrCancelledConfirmationComponent', () => {
  let component: HelpdeskWrCancelledConfirmationComponent;
  let fixture: ComponentFixture<HelpdeskWrCancelledConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrCancelledConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrCancelledConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
