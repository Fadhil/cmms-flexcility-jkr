/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngWoQuotationAcceptComponent } from './eng-wo-quotation-accept.component';

describe('EngWoQuotationAcceptComponent', () => {
  let component: EngWoQuotationAcceptComponent;
  let fixture: ComponentFixture<EngWoQuotationAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWoQuotationAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWoQuotationAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
