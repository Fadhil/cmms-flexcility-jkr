import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOngoingViewComponent } from './admin-work-order-ongoing-view.component';

describe('AdminWorkOrderOngoingViewComponent', () => {
  let component: AdminWorkOrderOngoingViewComponent;
  let fixture: ComponentFixture<AdminWorkOrderOngoingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOngoingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOngoingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
