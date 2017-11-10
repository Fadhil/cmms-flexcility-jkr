import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderExecutionComponent } from './work-order-execution.component';

describe('WorkOrderExecutionComponent', () => {
  let component: WorkOrderExecutionComponent;
  let fixture: ComponentFixture<WorkOrderExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
