import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrCancelledConfirmationComponent } from './admin-wr-cancelled-confirmation.component';

describe('AdminWrCancelledConfirmationComponent', () => {
  let component: AdminWrCancelledConfirmationComponent;
  let fixture: ComponentFixture<AdminWrCancelledConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrCancelledConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrCancelledConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
