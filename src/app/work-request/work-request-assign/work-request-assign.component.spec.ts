import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestAssignComponent } from './work-request-assign.component';

describe('WorkRequestAssignComponent', () => {
  let component: WorkRequestAssignComponent;
  let fixture: ComponentFixture<WorkRequestAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
