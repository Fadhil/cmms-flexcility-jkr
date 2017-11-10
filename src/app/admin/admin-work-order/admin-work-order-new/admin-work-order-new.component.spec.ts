import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderNewComponent } from './admin-work-order-new.component';

describe('AdminWorkOrderNewComponent', () => {
  let component: AdminWorkOrderNewComponent;
  let fixture: ComponentFixture<AdminWorkOrderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
