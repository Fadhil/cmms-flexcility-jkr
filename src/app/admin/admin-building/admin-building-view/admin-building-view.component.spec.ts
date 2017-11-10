import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuildingViewComponent } from './admin-building-view.component';

describe('AdminBuildingViewComponent', () => {
  let component: AdminBuildingViewComponent;
  let fixture: ComponentFixture<AdminBuildingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuildingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
