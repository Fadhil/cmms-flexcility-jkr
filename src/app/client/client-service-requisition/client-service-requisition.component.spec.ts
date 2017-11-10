import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceRequisitionComponent } from './client-service-requisition.component';

describe('ClientServiceRequisitionComponent', () => {
  let component: ClientServiceRequisitionComponent;
  let fixture: ComponentFixture<ClientServiceRequisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientServiceRequisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
