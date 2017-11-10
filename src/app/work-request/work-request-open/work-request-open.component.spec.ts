import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestOpenComponent } from './work-request-open.component';

describe('WorkRequestOpenComponent', () => {
  let component: WorkRequestOpenComponent;
  let fixture: ComponentFixture<WorkRequestOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
