import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderClosedViewComponent } from './admin-work-order-closed-view.component';

describe('AdminWorkOrderClosedViewComponent', () => {
  let component: AdminWorkOrderClosedViewComponent;
  let fixture: ComponentFixture<AdminWorkOrderClosedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderClosedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderClosedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
