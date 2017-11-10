import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderClosedComponent } from './admin-work-order-closed.component';

describe('AdminWorkOrderClosedComponent', () => {
  let component: AdminWorkOrderClosedComponent;
  let fixture: ComponentFixture<AdminWorkOrderClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
