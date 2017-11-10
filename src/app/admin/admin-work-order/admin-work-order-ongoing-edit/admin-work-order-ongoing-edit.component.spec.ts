import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOngoingEditComponent } from './admin-work-order-ongoing-edit.component';

describe('AdminWorkOrderOngoingEditComponent', () => {
  let component: AdminWorkOrderOngoingEditComponent;
  let fixture: ComponentFixture<AdminWorkOrderOngoingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOngoingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOngoingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
