import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkScheduleComponent } from './admin-work-schedule.component';

describe('AdminWorkScheduleComponent', () => {
  let component: AdminWorkScheduleComponent;
  let fixture: ComponentFixture<AdminWorkScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
