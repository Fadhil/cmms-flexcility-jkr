import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderQuotationCompletionComponent } from './admin-work-order-quotation-completion.component';

describe('AdminWorkOrderQuotationCompletionComponent', () => {
  let component: AdminWorkOrderQuotationCompletionComponent;
  let fixture: ComponentFixture<AdminWorkOrderQuotationCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderQuotationCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderQuotationCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
