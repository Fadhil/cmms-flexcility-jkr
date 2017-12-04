/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngWoQuotationEditComponent } from './eng-wo-quotation-edit.component';

describe('EngWoQuotationEditComponent', () => {
  let component: EngWoQuotationEditComponent;
  let fixture: ComponentFixture<EngWoQuotationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWoQuotationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWoQuotationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
