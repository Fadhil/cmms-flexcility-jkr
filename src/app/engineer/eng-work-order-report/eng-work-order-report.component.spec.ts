import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkOrderReportComponent } from './eng-work-order-report.component';

describe('EngWorkOrderReportComponent', () => {
  let component: EngWorkOrderReportComponent;
  let fixture: ComponentFixture<EngWorkOrderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkOrderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
