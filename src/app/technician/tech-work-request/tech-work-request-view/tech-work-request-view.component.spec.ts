import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkRequestViewComponent } from './tech-work-request-view.component';

describe('TechWorkRequestViewComponent', () => {
  let component: TechWorkRequestViewComponent;
  let fixture: ComponentFixture<TechWorkRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
