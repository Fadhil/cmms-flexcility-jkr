import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssetViewComponent } from './admin-asset-view.component';

describe('AdminAssetViewComponent', () => {
  let component: AdminAssetViewComponent;
  let fixture: ComponentFixture<AdminAssetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
