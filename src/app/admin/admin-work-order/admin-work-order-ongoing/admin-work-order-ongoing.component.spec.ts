import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOngoingComponent } from './admin-work-order-ongoing.component';

describe('AdminWorkOrderOngoingComponent', () => {
  let component: AdminWorkOrderOngoingComponent;
  let fixture: ComponentFixture<AdminWorkOrderOngoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOngoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
