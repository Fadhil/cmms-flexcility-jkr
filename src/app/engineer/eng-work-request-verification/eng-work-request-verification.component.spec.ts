import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkRequestVerificationComponent } from './eng-work-request-verification.component';

describe('EngWorkRequestVerificationComponent', () => {
  let component: EngWorkRequestVerificationComponent;
  let fixture: ComponentFixture<EngWorkRequestVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkRequestVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkRequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
