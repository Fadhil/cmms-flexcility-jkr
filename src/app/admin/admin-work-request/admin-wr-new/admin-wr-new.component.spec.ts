import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrNewComponent } from './admin-wr-new.component';

describe('AdminWrNewComponent', () => {
  let component: AdminWrNewComponent;
  let fixture: ComponentFixture<AdminWrNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
