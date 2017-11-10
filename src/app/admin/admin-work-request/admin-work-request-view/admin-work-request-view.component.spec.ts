import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkRequestViewComponent } from './admin-work-request-view.component';

describe('AdminWorkRequestViewComponent', () => {
  let component: AdminWorkRequestViewComponent;
  let fixture: ComponentFixture<AdminWorkRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
