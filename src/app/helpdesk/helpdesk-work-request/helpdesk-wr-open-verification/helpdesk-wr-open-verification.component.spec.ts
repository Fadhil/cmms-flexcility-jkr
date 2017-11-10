import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrOpenVerificationComponent } from './helpdesk-wr-open-verification.component';

describe('HelpdeskWrOpenVerificationComponent', () => {
  let component: HelpdeskWrOpenVerificationComponent;
  let fixture: ComponentFixture<HelpdeskWrOpenVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrOpenVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrOpenVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
