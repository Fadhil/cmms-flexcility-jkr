import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequisitionComponent } from './service-requisition.component';

describe('ServiceRequisitionComponent', () => {
  let component: ServiceRequisitionComponent;
  let fixture: ComponentFixture<ServiceRequisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
