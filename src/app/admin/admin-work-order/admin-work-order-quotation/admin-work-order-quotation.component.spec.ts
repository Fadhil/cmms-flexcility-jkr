import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderQuotationComponent } from './admin-work-order-quotation.component';

describe('AdminWorkOrderQuotationComponent', () => {
  let component: AdminWorkOrderQuotationComponent;
  let fixture: ComponentFixture<AdminWorkOrderQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
