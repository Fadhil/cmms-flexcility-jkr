import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestIndexComponent } from './work-request-index.component';

describe('WorkRequestIndexComponent', () => {
  let component: WorkRequestIndexComponent;
  let fixture: ComponentFixture<WorkRequestIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
