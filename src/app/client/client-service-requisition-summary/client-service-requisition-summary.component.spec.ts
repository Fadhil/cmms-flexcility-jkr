import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceRequisitionSummaryComponent } from './client-service-requisition-summary.component';

describe('ClientServiceRequisitionSummaryComponent', () => {
  let component: ClientServiceRequisitionSummaryComponent;
  let fixture: ComponentFixture<ClientServiceRequisitionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientServiceRequisitionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceRequisitionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
