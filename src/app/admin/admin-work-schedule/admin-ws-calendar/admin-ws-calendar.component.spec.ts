import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWsCalendarComponent } from './admin-ws-calendar.component';

describe('AdminWsCalendarComponent', () => {
  let component: AdminWsCalendarComponent;
  let fixture: ComponentFixture<AdminWsCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWsCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
