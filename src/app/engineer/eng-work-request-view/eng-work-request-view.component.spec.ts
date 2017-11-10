import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkRequestViewComponent } from './eng-work-request-view.component';

describe('EngWorkRequestViewComponent', () => {
  let component: EngWorkRequestViewComponent;
  let fixture: ComponentFixture<EngWorkRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
