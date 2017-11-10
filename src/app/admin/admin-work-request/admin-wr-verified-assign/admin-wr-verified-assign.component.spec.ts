import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrVerifiedAssignComponent } from './admin-wr-verified-assign.component';

describe('AdminWrVerifiedAssignComponent', () => {
  let component: AdminWrVerifiedAssignComponent;
  let fixture: ComponentFixture<AdminWrVerifiedAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrVerifiedAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrVerifiedAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
