import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuildingNewComponent } from './admin-building-new.component';

describe('AdminBuildingNewComponent', () => {
  let component: AdminBuildingNewComponent;
  let fixture: ComponentFixture<AdminBuildingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuildingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
