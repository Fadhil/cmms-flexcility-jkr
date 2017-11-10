import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOpenAssessmentComponent } from './admin-work-order-open-assessment.component';

describe('AdminWorkOrderOpenCompletionComponent', () => {
  let component: AdminWorkOrderOpenAssessmentComponent;
  let fixture: ComponentFixture<AdminWorkOrderOpenAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOpenAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOpenAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
