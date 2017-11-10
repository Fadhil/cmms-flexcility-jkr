import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardWoWrComponent } from './admin-dashboard-wo-wr.component';

describe('AdminDashboardWoWrComponent', () => {
  let component: AdminDashboardWoWrComponent;
  let fixture: ComponentFixture<AdminDashboardWoWrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardWoWrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardWoWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
