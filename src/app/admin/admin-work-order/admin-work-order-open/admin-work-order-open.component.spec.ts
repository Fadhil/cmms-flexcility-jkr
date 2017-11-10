import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOpenComponent } from './admin-work-order-open.component';

describe('AdminWorkOrderOpenComponent', () => {
  let component: AdminWorkOrderOpenComponent;
  let fixture: ComponentFixture<AdminWorkOrderOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
