import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWorkRequestViewComponent } from './helpdesk-work-request-view.component';

describe('HelpdeskWorkRequestViewComponent', () => {
  let component: HelpdeskWorkRequestViewComponent;
  let fixture: ComponentFixture<HelpdeskWorkRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWorkRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWorkRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
