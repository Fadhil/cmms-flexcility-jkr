import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAreaEditComponent } from './admin-area-edit.component';

describe('AdminAreaEditComponent', () => {
  let component: AdminAreaEditComponent;
  let fixture: ComponentFixture<AdminAreaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAreaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAreaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
