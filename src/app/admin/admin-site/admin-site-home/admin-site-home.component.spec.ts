import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteHomeComponent } from './admin-site-home.component';

describe('AdminSiteHomeComponent', () => {
  let component: AdminSiteHomeComponent;
  let fixture: ComponentFixture<AdminSiteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
