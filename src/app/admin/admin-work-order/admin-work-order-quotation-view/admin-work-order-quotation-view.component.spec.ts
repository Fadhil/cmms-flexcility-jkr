import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderQuotationViewComponent } from './admin-work-order-quotation-view.component';

describe('AdminWorkOrderQuotationViewComponent', () => {
  let component: AdminWorkOrderQuotationViewComponent;
  let fixture: ComponentFixture<AdminWorkOrderQuotationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderQuotationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderQuotationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
