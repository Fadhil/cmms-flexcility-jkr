import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssetNewComponent } from './admin-asset-new.component';

describe('AdminAssetNewComponent', () => {
  let component: AdminAssetNewComponent;
  let fixture: ComponentFixture<AdminAssetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
