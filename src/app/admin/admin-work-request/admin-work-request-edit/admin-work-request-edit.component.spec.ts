import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkRequestEditComponent } from './admin-work-request-edit.component';

describe('AdminWorkRequestEditComponent', () => {
  let component: AdminWorkRequestEditComponent;
  let fixture: ComponentFixture<AdminWorkRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
