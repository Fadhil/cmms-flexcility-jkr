import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrOpenVerificationComponent } from './admin-wr-open-verification.component';

describe('AdminWrOpenVerificationComponent', () => {
  let component: AdminWrOpenVerificationComponent;
  let fixture: ComponentFixture<AdminWrOpenVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrOpenVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrOpenVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
