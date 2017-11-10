import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssetComponent } from './admin-asset.component';

describe('AdminAssetComponent', () => {
  let component: AdminAssetComponent;
  let fixture: ComponentFixture<AdminAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
