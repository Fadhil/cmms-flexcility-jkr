import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrVerifiedComponent } from './admin-wr-verified.component';

describe('AdminWrVerifiedComponent', () => {
  let component: AdminWrVerifiedComponent;
  let fixture: ComponentFixture<AdminWrVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrVerifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
