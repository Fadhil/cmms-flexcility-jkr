import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOpenViewComponent } from './admin-work-order-open-view.component';

describe('AdminWorkOrderOpenViewComponent', () => {
  let component: AdminWorkOrderOpenViewComponent;
  let fixture: ComponentFixture<AdminWorkOrderOpenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOpenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOpenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
