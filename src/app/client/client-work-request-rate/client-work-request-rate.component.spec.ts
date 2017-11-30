/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientWorkRequestRateComponent } from './client-work-request-rate.component';

describe('ClientWorkRequestRateComponent', () => {
  let component: ClientWorkRequestRateComponent;
  let fixture: ComponentFixture<ClientWorkRequestRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWorkRequestRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWorkRequestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
