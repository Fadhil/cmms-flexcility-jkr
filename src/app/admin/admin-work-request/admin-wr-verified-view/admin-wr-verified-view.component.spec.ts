import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrVerifiedViewComponent } from './admin-wr-verified-view.component';

describe('AdminWrVerifiedViewComponent', () => {
  let component: AdminWrVerifiedViewComponent;
  let fixture: ComponentFixture<AdminWrVerifiedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrVerifiedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrVerifiedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
