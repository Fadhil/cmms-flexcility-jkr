import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderQuotationEditComponent } from './admin-work-order-quotation-edit.component';

describe('AdminWorkOrderQuotationEditComponent', () => {
  let component: AdminWorkOrderQuotationEditComponent;
  let fixture: ComponentFixture<AdminWorkOrderQuotationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderQuotationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderQuotationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
