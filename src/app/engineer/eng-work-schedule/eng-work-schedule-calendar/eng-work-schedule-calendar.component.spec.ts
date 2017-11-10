/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngWorkScheduleCalendarComponent } from './eng-work-schedule-calendar.component';

describe('EngWorkScheduleCalendarComponent', () => {
  let component: EngWorkScheduleCalendarComponent;
  let fixture: ComponentFixture<EngWorkScheduleCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkScheduleCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkScheduleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
