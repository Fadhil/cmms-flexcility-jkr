import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrNewEditComponent } from './admin-wr-new-edit.component';

describe('AdminWrNewEditComponent', () => {
  let component: AdminWrNewEditComponent;
  let fixture: ComponentFixture<AdminWrNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
