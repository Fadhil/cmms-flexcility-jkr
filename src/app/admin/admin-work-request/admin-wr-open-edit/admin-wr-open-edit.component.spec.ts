import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrOpenEditComponent } from './admin-wr-open-edit.component';

describe('AdminWrOpenEditComponent', () => {
  let component: AdminWrOpenEditComponent;
  let fixture: ComponentFixture<AdminWrOpenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrOpenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrOpenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
