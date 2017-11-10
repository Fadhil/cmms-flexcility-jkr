import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssetImportComponent } from './admin-asset-import.component';

describe('AdminAssetImportComponent', () => {
  let component: AdminAssetImportComponent;
  let fixture: ComponentFixture<AdminAssetImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssetImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssetImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
