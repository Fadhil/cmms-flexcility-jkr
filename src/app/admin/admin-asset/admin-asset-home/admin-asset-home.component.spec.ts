import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssetHomeComponent } from './admin-asset-home.component';

describe('AdminAssetHomeComponent', () => {
  let component: AdminAssetHomeComponent;
  let fixture: ComponentFixture<AdminAssetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
