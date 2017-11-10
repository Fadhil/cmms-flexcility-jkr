import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAreaNewComponent } from './admin-area-new.component';

describe('AdminAreaNewComponent', () => {
  let component: AdminAreaNewComponent;
  let fixture: ComponentFixture<AdminAreaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAreaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAreaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
