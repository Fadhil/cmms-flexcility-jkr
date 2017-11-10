import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrOpenViewComponent } from './admin-wr-open-view.component';

describe('AdminWrOpenViewComponent', () => {
  let component: AdminWrOpenViewComponent;
  let fixture: ComponentFixture<AdminWrOpenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWrOpenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWrOpenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
