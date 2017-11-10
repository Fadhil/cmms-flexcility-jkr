import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssetEditComponent } from './admin-asset-edit.component';

describe('AdminAssetEditComponent', () => {
  let component: AdminAssetEditComponent;
  let fixture: ComponentFixture<AdminAssetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
