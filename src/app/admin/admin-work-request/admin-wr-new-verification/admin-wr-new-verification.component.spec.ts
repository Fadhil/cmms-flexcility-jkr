import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrNewVerificationComponent } from './admin-wr-new-verification.component';

describe('AdminWrNewVerificationComponent', () => {
  let component: AdminWrNewVerificationComponent;
  let fixture: ComponentFixture<AdminWrNewVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrNewVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrNewVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
