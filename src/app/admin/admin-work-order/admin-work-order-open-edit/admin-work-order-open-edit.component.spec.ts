import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOpenEditComponent } from './admin-work-order-open-edit.component';

describe('AdminWorkOrderOpenEditComponent', () => {
  let component: AdminWorkOrderOpenEditComponent;
  let fixture: ComponentFixture<AdminWorkOrderOpenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOpenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOpenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
