import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrCancelledViewComponent } from './helpdesk-wr-cancelled-view.component';

describe('HelpdeskWrCancelledViewComponent', () => {
  let component: HelpdeskWrCancelledViewComponent;
  let fixture: ComponentFixture<HelpdeskWrCancelledViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrCancelledViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrCancelledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
