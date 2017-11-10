import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderEditComponent } from './admin-work-order-edit.component';

describe('AdminWorkOrderEditComponent', () => {
  let component: AdminWorkOrderEditComponent;
  let fixture: ComponentFixture<AdminWorkOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
