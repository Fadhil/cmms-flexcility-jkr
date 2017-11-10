import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAreaViewComponent } from './admin-area-view.component';

describe('AdminAreaViewComponent', () => {
  let component: AdminAreaViewComponent;
  let fixture: ComponentFixture<AdminAreaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAreaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAreaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
