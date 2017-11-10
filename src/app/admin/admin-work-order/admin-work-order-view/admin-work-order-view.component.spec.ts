import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderViewComponent } from './admin-work-order-view.component';

describe('AdminWorkOrderViewComponent', () => {
  let component: AdminWorkOrderViewComponent;
  let fixture: ComponentFixture<AdminWorkOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
