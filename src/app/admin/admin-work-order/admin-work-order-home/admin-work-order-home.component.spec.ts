import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderHomeComponent } from './admin-work-order-home.component';

describe('AdminWorkOrderHomeComponent', () => {
  let component: AdminWorkOrderHomeComponent;
  let fixture: ComponentFixture<AdminWorkOrderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
