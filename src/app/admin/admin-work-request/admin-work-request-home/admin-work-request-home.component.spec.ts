import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkRequestHomeComponent } from './admin-work-request-home.component';

describe('AdminWorkRequestHomeComponent', () => {
  let component: AdminWorkRequestHomeComponent;
  let fixture: ComponentFixture<AdminWorkRequestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkRequestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkRequestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
