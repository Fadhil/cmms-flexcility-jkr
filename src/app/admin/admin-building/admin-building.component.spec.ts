import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuildingComponent } from './admin-building.component';

describe('AdminBuildingComponent', () => {
  let component: AdminBuildingComponent;
  let fixture: ComponentFixture<AdminBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
