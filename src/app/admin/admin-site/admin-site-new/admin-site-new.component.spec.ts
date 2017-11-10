import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteNewComponent } from './admin-site-new.component';

describe('AdminSiteNewComponent', () => {
  let component: AdminSiteNewComponent;
  let fixture: ComponentFixture<AdminSiteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
