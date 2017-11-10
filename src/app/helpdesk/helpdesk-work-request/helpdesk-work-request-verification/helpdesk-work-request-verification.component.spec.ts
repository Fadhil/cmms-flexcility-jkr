/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelpdeskWorkRequestVerificationComponent } from './helpdesk-work-request-verification.component';

describe('HelpdeskWorkRequestVerificationComponent', () => {
  let component: HelpdeskWorkRequestVerificationComponent;
  let fixture: ComponentFixture<HelpdeskWorkRequestVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWorkRequestVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWorkRequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
