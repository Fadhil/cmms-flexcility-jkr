import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkRequestComponent } from './admin-work-request.component';

describe('AdminWorkRequestComponent', () => {
  let component: AdminWorkRequestComponent;
  let fixture: ComponentFixture<AdminWorkRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
