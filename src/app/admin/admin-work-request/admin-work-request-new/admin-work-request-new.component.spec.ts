import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkRequestNewComponent } from './admin-work-request-new.component';

describe('AdminWorkRequestNewComponent', () => {
  let component: AdminWorkRequestNewComponent;
  let fixture: ComponentFixture<AdminWorkRequestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkRequestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
