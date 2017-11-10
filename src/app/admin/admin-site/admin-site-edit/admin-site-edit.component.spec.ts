import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteEditComponent } from './admin-site-edit.component';

describe('AdminSiteEditComponent', () => {
  let component: AdminSiteEditComponent;
  let fixture: ComponentFixture<AdminSiteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
