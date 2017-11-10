import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteViewComponent } from './admin-site-view.component';

describe('AdminSiteViewComponent', () => {
  let component: AdminSiteViewComponent;
  let fixture: ComponentFixture<AdminSiteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
