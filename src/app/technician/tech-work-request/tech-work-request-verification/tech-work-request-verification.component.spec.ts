import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkRequestVerificationComponent } from './tech-work-request-verification.component';

describe('TechWorkRequestVerificationComponent', () => {
  let component: TechWorkRequestVerificationComponent;
  let fixture: ComponentFixture<TechWorkRequestVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkRequestVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkRequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
