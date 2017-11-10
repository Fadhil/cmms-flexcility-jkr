import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkRequestVerificationComponent } from './admin-work-request-verification.component';

describe('AdminWorkRequestVerificationComponent', () => {
  let component: AdminWorkRequestVerificationComponent;
  let fixture: ComponentFixture<AdminWorkRequestVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkRequestVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkRequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
