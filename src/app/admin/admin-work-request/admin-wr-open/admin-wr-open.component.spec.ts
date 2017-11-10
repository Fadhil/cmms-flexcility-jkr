import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrOpenComponent } from './admin-wr-open.component';

describe('AdminWrOpenComponent', () => {
  let component: AdminWrOpenComponent;
  let fixture: ComponentFixture<AdminWrOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
