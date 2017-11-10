import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrCancelledViewComponent } from './admin-wr-cancelled-view.component';

describe('AdminWrCancelledViewComponent', () => {
  let component: AdminWrCancelledViewComponent;
  let fixture: ComponentFixture<AdminWrCancelledViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrCancelledViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrCancelledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
