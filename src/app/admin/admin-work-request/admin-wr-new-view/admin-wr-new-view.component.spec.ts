import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrNewViewComponent } from './admin-wr-new-view.component';

describe('AdminWrNewViewComponent', () => {
  let component: AdminWrNewViewComponent;
  let fixture: ComponentFixture<AdminWrNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
