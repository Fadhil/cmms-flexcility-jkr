import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrCancelledComponent } from './admin-wr-cancelled.component';

describe('AdminWrCancelledComponent', () => {
  let component: AdminWrCancelledComponent;
  let fixture: ComponentFixture<AdminWrCancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrCancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
